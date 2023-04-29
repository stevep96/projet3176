const validetype=['parcs','zoo','lac','grotte','plage','montagne']

module.exports = (sequelize,DataTypes)=> {

    return sequelize.define('post',
    {
        id_post:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        titre:{
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                notEmpty:{msg:'le titre est obligatoire'},
                notNull:{msg: 'cette propriete est requise'}
            }
        },
        contenu:{
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                notEmpty:{msg:'le contenu est obligatoire'},
                notNull:{msg: 'cette propriete est requise'}
            }
        },
        latitude: {
            type: DataTypes.DOUBLE,
            allowNull:false,
            validate: {
                isInt: {msg:'la latitude est un reel'},
                notNull:{msg:'cette propriete est requise '},  max:{
                    args:[2000],
                    msg:'votre latitude ets trop grande,veuiller la reduire'
                },
                min:{
                    args:[0],
                    msg:"votre latitude ets trop petite,veuiller l'augmenter"
                }
            }
        },
        longitude:{
            type: DataTypes.DOUBLE,
            allowNull:false,
            validate: {
                isInt: {msg:'la longitude est un reel'},
                notNull:{msg:'cette propriete est requise '},
                max:{
                    args:[2000],
                    msg:'votre longitude ets trop grande,veuiller la reduire'
                },
                min:{
                    args:[0],
                    msg:"votre longitude ets trop petite,veuiller l'augmenter"
                }
            }

        },
        adresse: {
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                notEmpty:{msg:`L'adress est obligatoire'`},
                notNull:{msg: 'cette propriete est requise'}
            }
        },
        actif:{
            type: DataTypes.BOOLEAN,
            allowNull:false,
            validate: {
                isInt: {msg:'id  est un  entier'},
                notNull:{msg:'cette propriete est requise '}
            }

        },
        id_type: {
            type: DataTypes.INTEGER,
            allowNull:false,
            validate: {
                isInt: {msg:'id  est un  entier'},
                notNull:{msg:'cette propriete est requise '}
            }
        },
        id_ville:{
            type: DataTypes.INTEGER,
            allowNull:false,
            validate: {
                isInt: {msg:'id  est un  entier'},
                notNull:{msg:'cette propriete est requise '}
            }

        },
        id_utilisateur:{
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
        createdAt:'date_post',
        updatedAt: false
    }
    )
   
}