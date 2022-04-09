const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/registration', userController.registration)
router.post('/authorization', userController.authorization )
router.post('/logout', authMiddleware, userController.logOut)
router.get('/refresh', userController.refresh)

module.exports = router

