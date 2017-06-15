/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('workflow_rule', {
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
    tableName: 'workflow_rule'
  });
};
