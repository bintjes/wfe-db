/**
 * This module exports all models into a single object
 */
const Fs = require('fs'),
    Path = require('path')

module.exports = (sequelize) => {
    const unwanted = (file) => !['.', 'index.js'].includes(file)
    const importFile = (file) => { sequelize.import(Path.join(__dirname, file)) }

    Fs.readdirSync(__dirname)
        .filter(unwanted)
        .forEach(importFile)
}
