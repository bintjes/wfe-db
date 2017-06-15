/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('workflow_task', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    publishing_task_type_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      references: {
        model: 'task',
        key: 'id'
      }
    },
    workflow_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      references: {
        model: 'workflow',
        key: 'id'
      }
    },
    service_url: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    position: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'workflow_task'
  });
};
