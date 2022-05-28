require('dotenv').config()
const express = require('express')
const cookieParser = require('cookie-parser');
const sequelize = require('./config.db')
const cors = require('cors')
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')

const PORT = process.env.PORT || 80

const app = express()
app.use(cors({
    credentials: true,
    origin: process.env.API_CLIENT,
}))
app.use(express.json())
app.use(cookieParser())
app.use('/api', router)
// Обработка ошибок, последний Middleware
app.use(errorHandler)

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start();
