process.env.NODE_ENV = process.env.NODE_ENV || 'production'
const Dotenv = require('dotenv-webpack');
environment.plugins.prepend('Dotenv', new Dotenv());

const environment = require('./environment')

module.exports = environment.toWebpackConfig()
