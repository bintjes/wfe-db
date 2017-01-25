/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('r_publishing_server', {
    id_server: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    cname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    is_master: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: "0"
    },
    is_supermonitor: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: "0"
    },
    api_location: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'r_publishing_server'
  });
};
