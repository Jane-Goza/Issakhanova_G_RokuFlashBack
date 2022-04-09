const APIError = require('../error/APIError')
const userService = require('../services/userService')

class UserController {
  async registration(req, res, next) {
    try {
      const {
        firstName,
        lastName,
        email,
        password,
        typeOfAccount
      } = req.body
      if (!email || !password) {
        return next(APIError.badRequest('Incorrect email or password'))
      }
      const userData = await userService.registration(firstName,
        lastName,
        email,
        password,
        typeOfAccount)

      res.cookie('refreshToken', userData.refreshToken, {maxAge: 34 * 24 * 60 * 60 * 1000, httpOnly: true})
      return res.json(userData)
    } catch (error) {
      next(error)
    }
  }

  async authorization(req, res, next) {
    try {
      const {email, password} = req.body
      const userData = await userService.authorization(email, password)
      res.cookie('refreshToken', userData.refreshToken, {maxAge: 34 * 24 * 60 * 60 * 1000, httpOnly: true})
      return res.json(userData)
    } catch (error) {
      next(error)
    }
  }

  async logOut(req, res, next) {
    try {

      const {refreshToken} = req.cookies
      const token = await userService.logOut(refreshToken)
      res.clearCookie('refreshToken')
    } catch (error) {
      next(error)
    }
  }

  async refresh(req, res, next) {
    try {
      const {refreshToken} = req.cookies
      const userData = await userService.refresh(refreshToken)
      res.cookie('refreshToken', userData.refreshToken, {maxAge: 34 * 24 * 60 * 60 * 1000, httpOnly: true})
      return res.json(userData)
    } catch (error) {
      next(error)
    }
  }

}

module.exports = new UserController()





