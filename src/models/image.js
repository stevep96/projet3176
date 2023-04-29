
module.exports = (sequelize,DataTypes)=> {

    return sequelize.define('images',
    {
        id_img:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        lib_img:{
            type: DataTypes.TEXT,
            allowNull: false,
            validate:{
                notEmpty:{msg:" il s'sagit d'une chaine de charactere  obligatoire"},
                notNull:{msg: 'cette propriete est requise'}
            }
        },
        image:{
            type: DataTypes.TEXT,
            allowNull: false,
            validate:{
                isUrl:{msg:" il s'sagit d'une chaine de charactere  obligatoire"},
                notNull:{msg: 'cette propriete est requise'}
            }
        },
        id_post:{
            type: DataTypes.INTEGER,
            allowNull:false,
            validate: {
                isInt: {msg:'id  est un  entier'},
                notNull:{msg:'cette propriete est requise '}
            }
        },
    },
    {
        timestamps:true,
        createdAt:'date_img',
        updatedAt: false
    })
}