/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  let model =  sequelize.define('Publication', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    workflow_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      references: {
        model: 'Workflow',
        key: 'id'
      }
    },
    status_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '1',
      references: {
        model: 'PublicationStatus',
        key: 'id'
      }
    },
    housenumber: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    date_creation: {
      type: DataTypes.DATE,
      allowNull: true
    },
    date_modified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    user_id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: true,
      references: {
        model: 'User',
        key: 'id'
      }
    },
    json: {
      type: "BLOB",
      allowNull: true
    },
    dalet_videopath: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    lng_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      references: {
        model: 'Lang',
        key: 'id'
      }
    },
    message: {
      type: DataTypes.STRING(1000),
      allowNull: true
    }
  }, {
    tableName: 'publication',
    classMethods : {
      associate : (models) => {
        model.belongsTo(models.Workflow, {
          as : 'workflow',
          foreignKey : 'workflow_id'
        }),
        model.hasMany(models.PublicationTask, {
          as : 'publicationTasks',
          foreignKey : 'publication_id'
        }),
        model.belongsTo(models.PublicationStatus, {
          as : 'publicationStatus',
          foreignKey : 'status_id'
        }),
        model.belongsTo(models.User, {
          as : 'user',
          foreignKey : 'user_id'
        }),
        model.belongsTo(models.Language, {
          as : 'Language',
          foreignKey : 'lng_id'
        })
      }
    }
  });
};
