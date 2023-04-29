const {utilisateur} = require('../db/sequelize')
const  bcrypt = require('bcrypt')
const jwt= require('jsonwebtoken')
const privatekey=require('../auth/private_key')




module.exports=(app) => {
   app.post('/api/logins',(req,res)=>{
    utilisateur.findOne({where: {nom:req.body.nom}}).then(utilisateur=>{
        if(!utilisateur)
        {
            const message="l'utilisateur demande n'existe pas "
            return res.status(404).json({messsage}) 
        }
        bcrypt.compare(req.body.pass,utilisateur.pass).then(isPasswordValid =>{
            if(!isPasswordValid){
                const message =" le mot de passe est incorrect.";
                return res.statut(401).json({message})
            }
            //jwt
            const token = jwt.sign(
             { userid: utilisateur.id},
             privatekey,
             {expiration:'24h'}
            )
                const message = "l'utilisateur a ete connecte avec succes";
                return res.json({message, data: user})
            
        })
    }).catch(error =>{
        const message="l'urilisateur n'a pas pue se connecte."
        return res.json({message, data:error})

    })
   })
}