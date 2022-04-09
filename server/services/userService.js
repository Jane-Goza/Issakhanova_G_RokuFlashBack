const {User} = require('../models/models')
const bcrypt = require('bcrypt')
const uuid = require('uuid')
const tokenService = require('./tokenService')
const APIError = require('../error/APIError')
const UserDTO = require("../DTO/userDTO")

class UserService {
  async registration(firstName,
                     lastName,
                     email,
                     password,
                     typeOfAccount) {
    const candidate = await User.findOne({where: {email}})
    console.log(firstName,
      lastName,
      email,
      password,
      typeOfAccount)
    if (candidate) {
      throw APIError.badRequest('Пользователь с данным email уже существует')
    }
    const hashPassword = await bcrypt.hash(password, 3)

    const user = await User.create(
      {
        firstName,
        lastName,
        email,
        password: hashPassword,
        typeOfAccount
      })
    const userDTO = new UserDTO(user)
    const tokens = tokenService.generateToken({...userDTO})

    await tokenService.saveToken(user.id, tokens.refreshToken)
    return {
      ...tokens,
      user: userDTO
    }
  }

  async authorization(email, password) {
    const user = await User.findOne({where: {email}})
    if (!user) {
      return APIError.internal('Пользователь с таким именем не найден ')
    }
    let comparePassword = bcrypt.compareSync(password, user.password)
    if (!comparePassword) {
      return APIError.internal('Указан неправильный пароль')
    }
    const userDTO = new UserDTO(user)
    const token = tokenService.generateToken({...userDTO})
    await tokenService.saveToken(userDTO.id, token.refreshToken)
    return {...token, user: userDTO}
  }

  async logOut(refreshToken) {
    return await tokenService.removeToken(refreshToken)
  }

  async refresh(refreshToken) {
    if (!refreshToken) {
      return APIError.forbidden('Не авторизован')
    }
    const userData = tokenService.validateRefreshToken(refreshToken)
    const tokenFromDB = await tokenService.findToken(refreshToken)
    if (!userData || !tokenFromDB) {
      return APIError.forbidden('Не авторизован')
    }
    console.log(userData)
    const user = await User.findByPk(userData.id)
    const token = tokenService.generateToken({...user})

    await tokenService.saveToken(user.id, token.refreshToken)
    return {...token, user}
  }
}

module.exports = new UserService()
