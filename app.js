const express = require('express')
const cookiesParser = require('cookie-parser')
const session = require('express-session')
const morgan =require('morgan')
const favicon=require('serve-favicon')
const bodyParser=require('body-parser')
const sequelize = require('./src/db/sequelize')

const app =express()
const port = 3000
const oneDay = 1000 * 60 * 60 * 24 

//session middleware
app
.use(cookiesParser())
.use(session({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized:true,
    cookie: { maxAge: oneDay },
    resave: false
}))
.use(express.static(__dirname))
.use(favicon(__dirname + '/favicon.ico'))
.use(morgan('dev'))
.use(bodyParser.json())
.use(bodyParser.urlencoded({extended:true}))

//ici, nous placerons nos futurs points de terminaison. 
require('./src/routes/connexion')(app)
require('./src/routes/register')(app)
require('./src/routes/posts')(app)
require('./src/routes/ville')(app)
require('./src/routes/region')(app)


app.get('/', (req, res) => {
    res.send(console.log(req.session.utilisateur.nom))
 })

//On ajoute la gestion des erreurs 404
app.use(({res})=>{
    const message ='Impossible de trouver la ressource demandée! vous pouvez essayer une autre URL.'
    res.status(404).json({message})
})

app.listen(port,()=>console.log(`Notre application Node est démarrée sur : http://localhost:${port}`))