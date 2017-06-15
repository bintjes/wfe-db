/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('task', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    default_service_url: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(500),
      allowNull: true
    }
  }, {
    tableName: 'task'
  });
};
