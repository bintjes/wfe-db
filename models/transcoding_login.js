/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('transcoding_login', {
    id_login: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    login: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    can_submit: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '1'
    },
    id_machine_default: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '2'
    }
  }, {
    tableName: 'transcoding_login'
  });
};
