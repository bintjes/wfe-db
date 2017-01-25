/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('adm_habilitation_master', {
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
    },
    menu_exempt: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: "0"
    },
    compulsory: {
      type: DataTypes.INTEGER(6),
      allowNull: true
    },
    id_platform: {
      type: DataTypes.INTEGER(5),
      allowNull: false,
      defaultValue: "1",
      primaryKey: true
    }
  }, {
    tableName: 'adm_habilitation_master'
  });
};
