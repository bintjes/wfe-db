/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('publication_status', {
    id_status: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'publication_status'
  });
};
