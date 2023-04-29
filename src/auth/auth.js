const jwt = require('jsonwebtoken')
const privatekey = require('../auth/private_key')

module.exports= (req,res,next)=>{
    const authorization= req.headers.authorization

    if(!authorization){
        const message="vous n'vez pas four,is de jeton d'authentification "

        return res.status(401).json({message})

    }

    const token =authorization.split(' ')[1]
    const decodedtoken= jwt.verify(token,privatekey,(error,decodedtoken)=>{
        if(error){
            const message ="lutilisateur n'est pas autorise a acceder a cette ressource"
            return res.status(401).json({message,data:error})
        }
        const world =decodedtoken.utilisateurid

        if(req.body.utilisateurid && req.body.utilisateurid !==utilisateurid){
            const message ="l'identifiant de l'utilisateur est invalide"
            req.status(401).json({message})
        }
        else{
            next()
        }

    }
)}