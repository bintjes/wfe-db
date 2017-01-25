/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('r_transcoding_login', {
    id_login: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    login: {
      type: DataTypes.STRING,
      allowNull: false
    },
    can_submit: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: "1"
    },
    id_machine_default: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: "2"
    }
  }, {
    tableName: 'r_transcoding_login'
  });
};
