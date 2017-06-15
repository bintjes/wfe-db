/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('transcoding_factory', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    factory_stub: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    factory_label: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    factory_name: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    factory_description: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    id_login: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      references: {
        model: 'transcoding_login',
        key: 'id_login'
      }
    },
    id_machine: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      references: {
        model: 'transcoding_machine',
        key: 'id'
      }
    },
    rename_mask: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    option_rename: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    extension: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    default_priority: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: '1'
    },
    default_schedule: {
      type: DataTypes.TIME,
      allowNull: true
    },
    path_to_file: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'transcoding_factory'
  });
};
