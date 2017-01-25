/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('publication_task', {
    publication_task_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    tasktempl_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    id_status: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      references: {
        model: 'publication_status',
        key: 'id_status'
      }
    },
    position: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    product: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    job_id: {
      type: DataTypes.STRING,
      allowNull: true
    },
    service_url: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    publication_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      references: {
        model: 'publication_workflow',
        key: 'publication_id'
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
    tableName: 'publication_task'
  });
};
