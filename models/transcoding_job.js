/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('transcoding_job', {
    id_job: {
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
    id_machine: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    id_jobstatus: {
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
    id_factory: {
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
    submitted_by: {
      type: DataTypes.INTEGER(10).UNSIGNED,
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
    },
    error_log: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'transcoding_job'
  });
};
