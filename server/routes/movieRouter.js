const Router = require('express')
const router = new Router()
const movieController = require('../controllers/movieController')

router.get('/getAll/:typeOfAccount', movieController.getAll)
router.get('/getOne/:id', movieController.getOne)

module.exports = router

