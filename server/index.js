require('dotenv').config()
const express = require('express')
const sequelize = require('./database')
const models = require('./models/models')
const cors = require('cors')
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
const path = require('path')
const cookieParser = require('cookie-parser')

const PORT = process.env.PORT || 5001

const app = express()
app.use(cookieParser())
app.use(cors({
  credentials: true,
  origin: 'http://localhost:8080',
}))

app.use(express.json({extended: true}))
app.use(express.static(path.resolve(__dirname, 'static')))
app.use('/api', router)
//app.use(errorHandler)
app.get('/', (req, res) => {
  res.status(200).json({message: "SUCCESS"})
})

const start = async () => {
  try {
    await sequelize.authenticate()
    await sequelize.sync()
    app.listen(PORT, () => {
      console.log("Server started on port: " + PORT)
    })
  } catch (e) {
    console.log(e)
  }
}

start()
