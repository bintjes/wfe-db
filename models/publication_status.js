/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  let model =  sequelize.define('PublicationStatus', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    description: {
      type: DataTypes.STRING(55),
      allowNull: true
    }
  }, {
    tableName: 'publication_status'
  });
};
