/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  let model = sequelize.define('Rule', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    service_url: {
      type: DataTypes.STRING(500),
      allowNull: false
    }
  }, {
    tableName: 'rule'
  });
};
