/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    let model = sequelize.define('WorkflowGroup', {
      id: {
        type: DataTypes.INTEGER(10).UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING(255),
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'workflow_group',
      classMethods : {
          associate : (models) => {
              model.hasMany(models.Workflow, {
                  as: 'workflows',
                  foreignKey: 'group_id'
              })
          }
    }
  });
};
