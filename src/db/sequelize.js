const imageModel =require('../models/image')
const userModel = require('../models/utilisateur')
const postModel = require('../models/post')
const typeModel = require('../models/type')
const villeModel = require('../models/ville')
const regionModel = require('../models/region')

const { Sequelize, DataTypes } = require('sequelize')

  
const sequelize = new Sequelize('projet', 'root', '', {
  host: 'localhost',
  dialect: 'mariadb',
  dialectOptions: {
    timezone: 'Etc/GMT-2',
  },
  logging: false
})

const post=postModel(sequelize,DataTypes)
const img=imageModel(sequelize,DataTypes)
const utilisateur = userModel(sequelize, DataTypes)
const type = typeModel(sequelize, DataTypes)
const ville = villeModel(sequelize, DataTypes)
const region = regionModel(sequelize, DataTypes)
  

const initDb = () => {
  return sequelize.sync({force: true}).then(_ => {
    console.log('La base de donnée a bien été initialisée !')
  })
}
  

// Type foreign Key to posts table
type.hasMany(post,{
  foreignKey:'id_type',
  as: 'type_post'
})
post.belongsTo(type,{
  foreignKey: 'id_type',
  as: 'type_post'
})

//ville foreign Key to posts table
ville.hasMany(post,{
  foreignKey:'id_ville',
  as: 'ville_post'
})
post.belongsTo(ville,{
  foreignKey: 'id_ville',
  as: 'ville_post'
})

//utilisateurs foreign Key to posts table
utilisateur.hasMany(post,{
  foreignKey:'id_utilisateur',
  as: 'utilisateur_post'
})
post.belongsTo(utilisateur,{
  foreignKey: 'id_utilisateur',
  as: 'utilisateur_post'
})

// Region foreign Key to villes table
region.hasMany(ville,{
  foreignKey:'id_ville',
  as: 'region'
})
ville.belongsTo(region,{
  foreignKey: 'id_ville',
  as: 'region'
})


module.exports = { 
 initDb,utilisateur, post, img, type, ville, region
}