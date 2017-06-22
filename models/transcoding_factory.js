/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  let model = sequelize.define('TranscodingFactory', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    slug: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    machine_id: {
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
    default_schedule: {
      type: DataTypes.TIME,
      allowNull: true
    }
  }, {
    tableName: 'transcoding_factory',
    classMethods : {
      associate : (models) => {

        model.belongsTo(models.TranscodingMachine, {
          as : 'transcodingMachine',
          foreignKey : 'machine_id'
        })
      }
    }
  });
};
