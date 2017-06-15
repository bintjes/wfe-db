/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('workflow_lang', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    workflow_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      references: {
        model: 'workflow',
        key: 'id'
      }
    },
    lng_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      references: {
        model: 'lang',
        key: 'mixnews_iid'
      }
    }
  }, {
    tableName: 'workflow_lang'
  });
};
