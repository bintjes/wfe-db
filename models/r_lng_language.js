/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('r_lng_language', {
    lng_iid: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true
    },
    lng_salias: {
      type: DataTypes.CHAR(2),
      allowNull: false
    },
    lng_harris: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    lng_fullname: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    lng_rtl: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: "0"
    },
    live: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: "0"
    },
    lng_subdomain: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lng_collate_locale: {
      type: DataTypes.STRING,
      allowNull: true
    },
    lng_drupal_code: {
      type: DataTypes.STRING,
      allowNull: true
    },
    position: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    lng_mixnews_iid: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: "1"
    },
    lng_dalet: {
      type: DataTypes.CHAR(5),
      allowNull: true
    }
  }, {
    tableName: 'r_lng_language'
  });
};
