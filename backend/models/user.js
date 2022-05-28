const sequelize = require('../config.db')
const {DataTypes} = require('sequelize')
const Blog = require('./blog')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
})

User.hasMany(Blog)
Blog.belongsTo(User)

module.exports = User;