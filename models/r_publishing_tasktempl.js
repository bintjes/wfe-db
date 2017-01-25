/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('r_publishing_tasktempl', {
    tasktempl_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    publishing_task_type_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      references: {
        model: 'r_publishing_task_type',
        key: 'publishing_task_type_id'
      }
    },
    workflow_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      references: {
        model: 'r_publishing_workflow',
        key: 'workflow_id'
      }
    },
    service_url: {
      type: DataTypes.STRING,
      allowNull: true
    },
    position: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    }
  }, {
    tableName: 'r_publishing_tasktempl'
  });
};
