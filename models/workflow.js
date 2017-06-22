/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  let model = sequelize.define('Workflow', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    group_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      field : 'group_id',
      references: {
        model: 'WorkflowGroup',
        key: 'id'
      }
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    auto: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    farm_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    stub: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    is_concat: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'workflow',
    classMethods : {
      associate : (models) => {
        model.belongsTo(models.WorkflowGroup, {
          as : 'workflowGroup',
          foreignKey : 'group_id'
        }),
        model.hasMany(models.WorkflowTask, {
          as: 'workflowTasks',
          foreignKey: 'workflow_id'
        }),
        model.hasMany(models.WorkflowHn, {
          as: 'workflowHns',
          foreignKey: 'workflow_id'
        }),
        model.hasMany(models.WorkflowLang, {
          as: 'workflowLangs',
          foreignKey: 'workflow_id'
        }),
        model.hasMany(models.WorkflowRule, {
          as: 'workflowRules',
          foreignKey: 'id'
        })
      }
      }
  });
};
