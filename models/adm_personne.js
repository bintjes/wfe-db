/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('adm_personne', {
    matricule: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    nom: {
      type: DataTypes.STRING,
      allowNull: false
    },
    prenom: {
      type: DataTypes.STRING,
      allowNull: true
    },
    societe: {
      type: DataTypes.STRING,
      allowNull: true
    },
    isDeleted: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: "0"
    }
  }, {
    tableName: 'adm_personne'
  });
};
