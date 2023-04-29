const { utilisateur } = require('../db/sequelize')
const { ValidationError } = require('sequelize')
const cookiesParser = require('cookie-parser')
const session = require('express-session')
const bcrypt = require('bcrypt')
  
module.exports = (app) => {
  app.post('/api/login', async(req, res) => {
    utilisateur.findOne({
      where:{
        email:req.body.email
      }
    }).then(utilisateur => {
        if(utilisateur === null){
          const message = `email ou mot de passe incorrect`
          return res.status(404).json({message})
        }
        bcrypt.compare(req.body.pass, utilisateur.pass)
        .then(valid=>{
          if(!valid){
            const message = `Email ou mot de passe incorrect`;
            return res.status(404).json({message})
          }
          const message = 'One user found'
          req.session.utilisateur = utilisateur
          res.redirect("/api/home")
        })
      })
      .catch(error => {
        const message = `L'utilisateur n'a pas pu être récupéré. Réessayez dans quelques instants.`
        res.status(500).json({message, data: error})
      })
  })
}