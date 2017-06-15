/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('transcoding_machine', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    machine_ip: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    machine_name: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    mount_flipstories: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: '\\SGINAS\\flipstories\\'
    },
    maxjob: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false,
      defaultValue: '5'
    },
    machine_stub: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    vantage_message: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'transcoding_machine'
  });
};
