/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('adm_translations', {
    stub: {
      type: DataTypes.STRING,
      allowNull: false
    },
    en: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    fr: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    de: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    it: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    sp: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    pt: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ru: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ar: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    tr: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    id_phrase: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    pe: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    pl: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ua: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'adm_translations'
  });
};
