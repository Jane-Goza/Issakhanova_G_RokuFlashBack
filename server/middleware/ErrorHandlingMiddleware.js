const APIError = require('../error/APIError')


module.exports = function (err, req, res, next){
    if (err instanceof APIError){
        throw res.status(err.status).json({message: err.message})
    }
    throw res.status(500).json({message: "Непредвиденная ошибка"})
}
