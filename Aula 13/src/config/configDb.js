const { Sequelize } = require('sequelize');
const dotenv = require('dotenv')
dotenv.config()

const sequelize = new Sequelize(
    process.env.DEV_DB_NOME, 
    process.env.DEV_DB_USER, 
    process.env.DEV_DB_PASSWORD, {
    host: process.env.DEV_DB_HOST,
    dialect: process.env.DEV_DB_DIALECT
  });

module.exports = sequelize

// DEV_DB_PASSWORD=BemVindo!
// DEV_DB_DIALECT=postgres
// DEV_DB_USER=postgres
// DEV_DB_HOST=localhost
// DEV_DB_NOME=sistema_academico
// DEV_DB_PORTA=5432
// PORTA=3000
// NODE_ENV=development