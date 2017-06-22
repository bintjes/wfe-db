/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  let model =  sequelize.define('WorkflowRule', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'workflow',
        key: 'id'
      }
    },
    rule_type_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'rule',
        key: 'id'
      }
    },
    order: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false
    }
  }, {
    tableName: 'workflow_rule',
    classMethods : {
      associate : (models) => {
        model.belongsTo(models.Rule, {
          as : 'rule',
          foreignKey : 'rule_type_id'
        }),
        model.belongsTo(models.Workflow, {
          as : 'workflow',
          foreignKey : 'id'
        })
      }
    }
  });
};
