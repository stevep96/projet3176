module.exports = (sequelize, DataTypes) => {
    return sequelize.define('type', {
      id_type: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      lib_type: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {msg: 'Le libélé du type ne doit pas être vide'},
          notNull: {msg: 'Le libelé du type est une propriété requise'}
        }
      },
      id_cat: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: {msg: 'La catégorie ne doit pas être vide'},
          notNull: {msg: 'La catégorie est une propriété requise'}
        }
      }
    }, {
      timestamps: true,
      createdAt: false,
      updatedAt: false
    })
  }