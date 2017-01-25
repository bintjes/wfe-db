/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('adm_habilitation_rolename', {
    id_role: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    role_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    role_description: {
      type: DataTypes.STRING,
      allowNull: true
    },
    created_by: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    date_creation: {
      type: DataTypes.DATE,
      allowNull: false
    },
    modified_by: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    date_modification: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'adm_habilitation_rolename'
  });
};
