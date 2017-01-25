/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('adm_habilitation_platform', {
    id_platform: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    platform_label: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'adm_habilitation_platform'
  });
};
