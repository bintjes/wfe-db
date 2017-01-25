/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('publication_workflow', {
    publication_id: {
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
    id_status: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: "1",
      references: {
        model: 'publication_status',
        key: 'id_status'
      }
    },
    housenumber: {
      type: DataTypes.STRING,
      allowNull: true
    },
    date_creation: {
      type: DataTypes.DATE,
      allowNull: true
    },
    last_modified: {
      type: DataTypes.DATE,
      allowNull: true
    },
    created_by: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      references: {
        model: 'adm_users',
        key: 'iduser'
      }
    },
    farm_id: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: "1"
    },
    xml_origin: {
      type: "BLOB",
      allowNull: true
    },
    dalet_videopath: {
      type: DataTypes.STRING,
      allowNull: true
    },
    lng_mixnews_iid: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      references: {
        model: 'r_lng_language',
        key: 'lng_mixnews_iid'
      }
    },
    message: {
      type: DataTypes.STRING,
      allowNull: true
    },
    last_run: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'publication_workflow'
  });
};
