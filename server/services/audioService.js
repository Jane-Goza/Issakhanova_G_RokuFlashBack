const {Audio} = require('../models/models')
const APIError = require('../error/APIError')

class AudioService {

  async getAll(typeOfAccount) {
    switch (typeOfAccount){
      case 'adult':
        return await Audio.findAll()
      case 'child':
        console.log('child')
        return await Audio.findAll({
          where: {restrictions: 'no'}
        })
    }
  }


  async getOne(id) {
    return await Audio.findOne({
      where:
        {
          id
        },
    })
  }

}

module.exports = new AudioService()
