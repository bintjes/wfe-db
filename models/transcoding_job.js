/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('transcoding_job', {
    id_job: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    publication_task_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      references: {
        model: 'publication_task',
        key: 'publication_task_id'
      }
    },
    id_machine: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    id_jobstatus: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: "1",
      references: {
        model: 'r_transcoding_status',
        key: 'id_jobstatus'
      }
    },
    video_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    id_factory: {
      type: DataTypes.INTEGER(10),
      allowNull: true,
      references: {
        model: 'r_transcoding_factory',
        key: 'id_factory'
      }
    },
    scheduled: {
      type: DataTypes.DATE,
      allowNull: true
    },
    submitted_by: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    uuid: {
      type: DataTypes.STRING,
      allowNull: true
    },
    submitted_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    video_duration: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    error_log: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'transcoding_job'
  });
};
