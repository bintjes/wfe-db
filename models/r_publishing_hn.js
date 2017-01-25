/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('r_publishing_hn', {
    r_publishing_hn_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    workflow_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      references: {
        model: 'r_publishing_workflow',
        key: 'workflow_id'
      }
    },
    hn_type: {
      type: DataTypes.STRING,
      allowNull: true
    },
    label: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'r_publishing_hn'
  });
};
