/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  let model = sequelize.define('WorkflowTask', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    task_type_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      references: {
        model: 'Task',
        key: 'id'
      }
    },
    workflow_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      references: {
        model: 'Workflow',
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
    tableName: 'workflow_task',
    classMethods : {
      associate : (models) => {
        model.belongsTo(models.Workflow, {
          as : 'workflow',
          foreignKey : 'workflow_id'
        }),
        model.belongsTo(models.Task, {
          as : 'task',
          foreignKey : 'task_type_id'
        })

      }
    }
  });
};
