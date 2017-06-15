/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    login: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    password_hash: {
      type: DataTypes.STRING(41),
      allowNull: true
    },
    nonce: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    nom: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    prenom: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    avatar: {
      type: DataTypes.STRING(120),
      allowNull: true
    },
    actif: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '1'
    },
    commentaire: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    quota_forum: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '2'
    },
    cpt_lock: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    dt_crea: {
      type: DataTypes.DATE,
      allowNull: true
    },
    id_crea: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    dt_modif: {
      type: DataTypes.DATE,
      allowNull: true
    },
    id_modif: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    dt_lastlog: {
      type: DataTypes.DATE,
      allowNull: true
    },
    id_role: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    matricule: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    email_pass: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    tableName: 'users'
  });
};
