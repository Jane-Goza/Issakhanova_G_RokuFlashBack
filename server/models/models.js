const sequelize = require('../database')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  firstName: {type: DataTypes.STRING},
  lastName: {type: DataTypes.STRING},
  email: {type: DataTypes.STRING},
  password: {type: DataTypes.STRING},
  typeOfAccount: {type: DataTypes.STRING}
}, {
  timestamps: false,
  createdAt: false,
  updatedAt: false
})

const Token = sequelize.define('token', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  refreshToken: {type: DataTypes.TEXT}
}, {
  timestamps: false,
  createdAt: false,
  updatedAt: false
})

const Movie = sequelize.define('movie', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  image: {type: DataTypes.STRING},
  title: {type: DataTypes.STRING},
  year: {type: DataTypes.INTEGER},
  runTime: {type: DataTypes.STRING},
  storyLine: {type: DataTypes.TEXT},
  trailer: {type: DataTypes.STRING},
  release: {type: DataTypes.STRING},
  restrictions: {type: DataTypes.STRING}
}, {
  timestamps: false,
  createdAt: false,
  updatedAt: false
})

const Audio = sequelize.define('audio', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  author: {type: DataTypes.STRING},
  name: {type: DataTypes.STRING},
  restrictions: {type: DataTypes.STRING},
  file: {type: DataTypes.STRING}
}, {
  timestamps: false,
  createdAt: false,
  updatedAt: false
})

User.hasOne(Token)
Token.belongsTo(User)


module.exports = {
  Movie,
  User,
  Token,
  Audio
}
