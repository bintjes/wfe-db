/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('r_publishing_workflow', {
    workflow_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    publishing_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      references: {
        model: 'r_publishing',
        key: 'publishing_id'
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true
    },
    auto: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: "1"
    },
    farm_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: "1"
    },
    stub: {
      type: DataTypes.STRING,
      allowNull: true
    },
    is_concat: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: "0"
    }
  }, {
    tableName: 'r_publishing_workflow'
  });
};
