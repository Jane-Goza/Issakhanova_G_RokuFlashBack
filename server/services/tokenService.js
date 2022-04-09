const jwt = require('jsonwebtoken')
const {Token} = require('./../models/models')

class TokenService {
  generateToken(payload) {
    const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {
      expiresIn: '1d'
    })
    const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {
      expiresIn: '30d'
    })
    return {
      accessToken,
      refreshToken
    }
  }

  async saveToken(userId, refreshToken) {
    console.log(userId, refreshToken)
    const tokenData = await Token.findOne({where: {userId}})
    if (tokenData) {
      tokenData.refreshToken = refreshToken
      return tokenData.save()
    }
    return await Token.create({userId, refreshToken})
  }

  async removeToken(refreshToken) {
    return await Token.destroy({where: {refreshToken}})
  }

  async findToken(refreshToken) {
    const tokenData = await Token.findOne({where: {refreshToken}})
    console.log(tokenData)
    return tokenData
  }

  validateAccessToken(token) {
    try {
      return jwt.verify(token, process.env.JWT_ACCESS_SECRET)
    } catch (error) {
      return null
    }
  }

  validateRefreshToken(token) {
    try {

      return jwt.verify(token, process.env.JWT_REFRESH_SECRET)
    } catch (error) {
      return null
    }
  }

}

module.exports = new TokenService()
