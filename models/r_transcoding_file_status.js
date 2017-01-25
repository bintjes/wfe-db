/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('r_transcoding_file_status', {
    id_filestatus: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    label_status: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sgi_status: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'r_transcoding_file_status'
  });
};
