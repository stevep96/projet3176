const { user } = require('../db/sequelize')
const { ValidationError } = require('sequelize')
const cookiesParser = require('cookie-parser')
const session = require('express-session')
  
module.exports = (app) => {
  app.get('/api/home', (req, res) => {
     res.json(console.log(req.session.utilisateur))
  })
}