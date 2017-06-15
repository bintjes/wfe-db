/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('workflow_hn', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    workflow_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      references: {
        model: 'workflow',
        key: 'id'
      }
    },
    hn_type: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    label: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  }, {
    tableName: 'workflow_hn'
  });
};
