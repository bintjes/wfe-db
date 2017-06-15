/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('publication', {
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
    id_status: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '1',
      references: {
        model: 'publication_status',
        key: 'id'
      }
    },
    housenumber: {
      type: DataTypes.STRING(255),
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
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: true,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    farm_id: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    xml_origin: {
      type: "BLOB",
      allowNull: true
    },
    dalet_videopath: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    lng_mixnews_iid: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      references: {
        model: 'lang',
        key: 'mixnews_iid'
      }
    },
    message: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    last_run: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'publication'
  });
};
