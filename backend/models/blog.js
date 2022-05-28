const sequelize = require('../config.db')
const {DataTypes} = require('sequelize')

const Blog = sequelize.define('blog', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    date: {
        type: DataTypes.DATE
    },
    // content: {
    //     type: DataTypes.JSON
    // },
    name: {
        type: DataTypes.STRING
    }
})

module.exports = Blog;