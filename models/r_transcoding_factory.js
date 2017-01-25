/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('r_transcoding_factory', {
    id_factory: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    factory_stub: {
      type: DataTypes.STRING,
      allowNull: false
    },
    factory_label: {
      type: DataTypes.STRING,
      allowNull: false
    },
    factory_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    factory_description: {
      type: DataTypes.STRING,
      allowNull: true
    },
    id_login: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      references: {
        model: 'r_transcoding_login',
        key: 'id_login'
      }
    },
    id_machine: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      references: {
        model: 'r_transcoding_machine',
        key: 'id_machine'
      }
    },
    rename_mask: {
      type: DataTypes.STRING,
      allowNull: true
    },
    option_rename: {
      type: DataTypes.INTEGER(3),
      allowNull: false,
      defaultValue: "1"
    },
    extension: {
      type: DataTypes.STRING,
      allowNull: false
    },
    default_priority: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "1"
    },
    default_schedule: {
      type: DataTypes.TIME,
      allowNull: true
    },
    path_to_file: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'r_transcoding_factory'
  });
};
