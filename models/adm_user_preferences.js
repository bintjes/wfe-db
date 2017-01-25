/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('adm_user_preferences', {
    id_user: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    webmail_login: {
      type: DataTypes.STRING,
      allowNull: true
    },
    webmail_password: {
      type: DataTypes.STRING,
      allowNull: true
    },
    language: {
      type: DataTypes.STRING,
      allowNull: true
    },
    work_telephone: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'adm_user_preferences'
  });
};
