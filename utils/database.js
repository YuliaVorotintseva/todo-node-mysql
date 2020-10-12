const Sequilize = require('sequelize')

const sequelize = new Sequilize('node-todo', 'yulia', '#J59ft2bx', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = sequelize
