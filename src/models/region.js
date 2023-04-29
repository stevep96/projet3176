module.exports = (sequelize, DataTypes) => {
    return sequelize.define('region', {
        id_region: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      lib_region: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {msg: `Le libelé de la region ne doit pas être vide`},
          notNull: {msg: `Merci de proposer un libelé de region valide`}
        }
      }
    }, {
      timestamps: true,
      createdAt: false,
      updatedAt: false
    })
  }