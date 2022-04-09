const APIError = require('../error/APIError')
const audioService = require('../services/audioService')

class AudioController {
  async getAll(req, res, next) {
    try {
      const {typeOfAccount} = req.params
      const audios = await audioService.getAll(typeOfAccount)
      return res.json(audios)
    } catch (error) {
      next(error)
    }
  }

  async getOne(req, res, next) {
    try {
      const {id} = req.params
      const audios = await audioService.getAll(id)
      return res.json(audios)
    } catch (error) {
      next(error)
    }
  }
}

module.exports = new AudioController()
