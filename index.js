const Sequelize = require('sequelize')
const defineModels = require('./models')

module.exports = (config = {}) => {
    let options = Object.assign({}, {
        define : {
            timestamps : false,
            freezeTableName : true
        },
        logging: console.log
    }, config.options)

    /* http://docs.sequelizejs.com/en/v3/docs/getting-started/#application-wide-model-options
    is only usable with the string connection form. It's most certainly a bug on sequelize.
    */
    let connexion = new Sequelize(
        `mysql://${config.user}:${config.password}@${config.options.host}:3306/${config.dbname}`,
        options
    )

    defineModels(connexion)

    Object.keys(connexion.models).forEach((modelName) => {
        let model = connexion.models[modelName]

        const hasAssociate = model.associate !== undefined
        const associateIsFunction = model.associate instanceof Function

        if (hasAssociate && associateIsFunction) {
            model.associate(connexion.models)
        }
    })

    return connexion
}