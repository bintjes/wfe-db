/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  let model = sequelize.define('TranscodingMachine', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    slug: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    tableName: 'transcoding_machine',
    classMethods : {
      associate : (models) => {
        model.hasMany(models.TranscodingFactory, {
          as: 'transcodingFactories',
          foreignKey: 'machine_id'
        })
      }
    }
  });
};
