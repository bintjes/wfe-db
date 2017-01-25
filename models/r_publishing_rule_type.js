/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('r_publishing_rule_type', {
    rule_type_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    rule_type_description: {
      type: DataTypes.STRING,
      allowNull: true
    },
    service_url: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'r_publishing_rule_type'
  });
};
