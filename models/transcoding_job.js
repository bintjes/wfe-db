/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  let model = sequelize.define('TranscodingJob', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    publication_task_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      references: {
        model: 'publication_task',
        key: 'id'
      }
    },
    transcoding_status_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '1',
      references: {
        model: 'transcoding_status',
        key: 'id'
      }
    },
    video_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    factory_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
      references: {
        model: 'transcoding_factory',
        key: 'id'
      }
    },
    scheduled: {
      type: DataTypes.DATE,
      allowNull: true
    },
    uuid: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    submitted_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    video_duration: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'transcoding_job',
    classMethods : {
      associate : (models) => {
        model.belongsTo(models.TranscodingFactory, {
          as : 'transcodingFactory',
          foreignKey : 'factory_id'
        }),
        model.belongsTo(models.TranscodingStatus, {
          as : 'transcodingStatus',
          foreignKey : 'transcoding_status_id'
        }),
        model.belongsTo(models.PublicationTask, {
          as : 'publicationTask',
          foreignKey : 'publication_task_id'
        })


      }
    }


  });
};
