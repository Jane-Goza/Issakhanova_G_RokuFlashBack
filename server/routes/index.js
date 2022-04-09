const Router = require('express')
const router = new Router()
const authMiddleware = require('./../middleware/authMiddleware')

const userRouter = require('./userRouter')
const audioRouter = require('./audioRouter')
const movieRouter = require('./movieRouter')

router.use('/user', userRouter)
router.use('/movies', authMiddleware, movieRouter)
router.use('/audios', authMiddleware, audioRouter)


module.exports = router

