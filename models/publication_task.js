/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  let model =  sequelize.define('PublicationTask', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    status_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      references: {
        model: 'PublicationStatus',
        key: 'id'
      }
    },
    position: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    product: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    job_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    service_url: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    publication_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      references: {
        model: 'Publication',
        key: 'id'
      }
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    last_run: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'publication_task',
    classMethods : {
      associate: (models) => {
        model.hasOne(models.TranscodingJob, {
          as : 'transcodingJob',
          foreignKey : 'publication_task_id'
        }),
        model.belongsTo(models.PublicationStatus, {
          as : 'publicationStatus',
          foreignKey : 'status_id'
        })
      }
    }
  });
};
