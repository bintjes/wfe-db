/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('transcoding_files', {
    file_order: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    id_job: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'transcoding_job',
        key: 'id_job'
      }
    },
    id_filestatus: {
      type: DataTypes.INTEGER(10),
      allowNull: true,
      references: {
        model: 'r_transcoding_file_status',
        key: 'id_filestatus'
      }
    },
    file_uri: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'transcoding_files'
  });
};
