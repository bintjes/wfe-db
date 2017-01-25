/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('r_publishing_language', {
    r_publishing_language_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    workflow_id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      references: {
        model: 'r_publishing_workflow',
        key: 'workflow_id'
      }
    },
    lng_mixnews_iid: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      references: {
        model: 'r_lng_language',
        key: 'lng_mixnews_iid'
      }
    }
  }, {
    tableName: 'r_publishing_language'
  });
};
