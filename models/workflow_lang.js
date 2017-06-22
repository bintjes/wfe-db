/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  let model =  sequelize.define('WorkflowLang', {
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
    tableName: 'workflow_lang',
    classMethods : {
      associate : (models) => {
        model.belongsTo(models.Language, {
          as : 'Language',
          foreignKey : 'lng_id'
        }),
        model.belongsTo(models.Workflow, {
          as : 'Workflow',
          foreignKey : 'workflow_id'
        })
      }
    }
  });
};
