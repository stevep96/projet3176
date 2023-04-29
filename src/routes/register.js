const { utilisateur } = require('../db/sequelize')
const { ValidationError } = require('sequelize')
const cookiesParser = require('cookie-parser')
const session = require('express-session')
const bcrypt = require('bcrypt')
  
module.exports = (app) => {
  app.post('/api/register', async(req, res) => {
    if(req.body.pass){
      const salt = await bcrypt.genSalt(10)
      newPass=await bcrypt.hash(req.body.pass, salt)
      req.body.pass = newPass
    }
    utilisateur.create(req.body)
      .then(utilisateur => {
        const message = `l'utilisateur ${req.body.nom} a bien été crée.`
        res.json({ message, data: utilisateur })
      })
      .catch(error => {
        if(error instanceof ValidationError){
          return res.status(400).json({message: error.message, data: error})
        }
        const message = `L'utilisateur n'a pu être créé. Réessayez dans quelques instants.`
        res.status(500).json({message, data: error})
      })
  })
}