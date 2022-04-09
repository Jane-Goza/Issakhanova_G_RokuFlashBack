const {Movie} = require('../models/models')
const APIError = require('../error/APIError')

class MovieService {
  async getAll(typeOfAccount) {
    switch (typeOfAccount){
      case 'adult':
        return await Movie.findAll()
      case 'child':
        console.log('child')
        return await Movie.findAll({
          where: {restrictions: 'no'}
        })
    }
  }


  async getOne(id) {
    return await Movie.findByPk(id)
  }

}

module.exports = new MovieService()
