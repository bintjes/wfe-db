/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('adm_habilitation_role', {
    id_role: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    module: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    page: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    insert: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    update: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    delete: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    access: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    tableName: 'adm_habilitation_role'
  });
};
