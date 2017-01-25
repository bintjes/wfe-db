/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('r_transcoding_machine', {
    id_machine: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    machine_ip: {
      type: DataTypes.STRING,
      allowNull: true
    },
    machine_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    mount_flipstories: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ""
    },
    maxjob: {
      type: DataTypes.INTEGER(5),
      allowNull: false,
      defaultValue: "5"
    },
    machine_stub: {
      type: DataTypes.STRING,
      allowNull: true
    },
    vantage_message: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: "0"
    }
  }, {
    tableName: 'r_transcoding_machine'
  });
};
