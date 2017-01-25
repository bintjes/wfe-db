/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('adm_groups2', {
    id_grp: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    lib_grp: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dt_crea: {
      type: DataTypes.DATE,
      allowNull: true
    },
    id_crea: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    dt_modif: {
      type: DataTypes.DATE,
      allowNull: true
    },
    id_modif: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'adm_groups2'
  });
};
