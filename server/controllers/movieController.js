const APIError = require('../error/APIError')
const movieService = require('../services/movieService')

class MovieController {
  async getAll(req, res, next) {
    try {
      const {typeOfAccount} = req.params
      console.log(typeOfAccount)
      const movies = await movieService.getAll(typeOfAccount)
      return res.json(movies)
    } catch (error) {
      next(error)
    }
  }

  async getOne(req, res, next) {
    try {
      const {id} = req.params
      const movies = await movieService.getOne(id)
      return res.json(movies)
    } catch (error) {
      next(error)
    }
  }
}

module.exports = new MovieController()
