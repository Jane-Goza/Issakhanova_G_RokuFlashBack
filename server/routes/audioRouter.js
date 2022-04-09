const Router = require('express')
const router = new Router()
const audioController = require('../controllers/audioController')

router.get('/getAll/:typeOfAccount', audioController.getAll)
router.get('/getOne/:id', audioController.getOne)

module.exports = router

