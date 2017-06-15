/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Language', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    alias: {
      type: DataTypes.CHAR(2),
      allowNull: false
    },
    fullname: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    rtl: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    collate_locale: {
      type: DataTypes.STRING(55),
      allowNull: true
    },
    mixnews_iid: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '1',
      unique: true
    },
    lng_dalet: {
      type: DataTypes.CHAR(5),
      allowNull: true
    },
    lng_iso: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    lng_dalet_long: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    dalet_station_id: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    }
  }, {
    tableName: 'lang'
  });
};
