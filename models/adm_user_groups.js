/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('adm_user_groups', {
    id_user: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: "0"
    },
    id_group: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: "0"
    }
  }, {
    tableName: 'adm_user_groups'
  });
};
