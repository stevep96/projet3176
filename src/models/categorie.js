
module.exports = (sequelize,DataTypes)=> {

    return sequelize.define('categorie',
    { 
        id_cat:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        lib_cat:{
            type: DataTypes.STRING,
            allowNull: false,
            unique:{
               msg: 'ce libelle est deja pris' 
            },
            validate:{
                notEmpty:{msg:'le libelle est une chaine de charactere  obligatoire'},
                notNull:{msg: 'cette propriete est requise'}
            }
           
    },
   

},
{
    timestamps:true,
    createdAt:false,
    updatedAt: false
})
}