/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('publication_task', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    tasktempl_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    id_status: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      references: {
        model: 'publication_status',
        key: 'id'
      }
    },
    position: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    product: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    job_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    service_url: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    publication_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      references: {
        model: 'publication',
        key: 'id'
      }
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    last_run: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'publication_task'
  });
};
