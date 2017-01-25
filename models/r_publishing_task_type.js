/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('r_publishing_task_type', {
    publishing_task_type_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    default_service_url: {
      type: DataTypes.STRING,
      allowNull: true
    },
    task_type_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    task_type_description: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'r_publishing_task_type'
  });
};
