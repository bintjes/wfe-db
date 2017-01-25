/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('r_publishing_rule', {
    workflow_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'r_publishing_workflow',
        key: 'workflow_id'
      }
    },
    rule_type_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'r_publishing_rule_type',
        key: 'rule_type_id'
      }
    },
    rule_order: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    }
  }, {
    tableName: 'r_publishing_rule'
  });
};
