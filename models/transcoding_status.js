/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  let model = sequelize.define('TranscodingStatus', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    label_status: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'transcoding_status'
  });
};
