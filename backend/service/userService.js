require('dotenv').config()
const bcrypt = require('bcrypt');
const ApiError = require('../error/ApiError');
const User = require('../models/user');
const tokenService = require('./tokenService');
const userDto = require('./userDto');

class TeacherService {
    async registration(email, password) {
        const user = await User.findOne({ where: {email} });
        if (user) {
            throw ApiError.badRequest(`Пользователь с таким email ${email} уже существует`);
        }

        const hasPassword = await bcrypt.hash(password, 3);
        const createUser = await User.create({ email, password: hasPassword });
        const dto = userDto(createUser);
        const token = tokenService.generate(dto);

        return { token, dto };
    }

    async login(email, password) {
        const user = await User.findOne({ where: {email} });
        
        if (!user) {
            throw ApiError.badRequest(`Пользователь с таким email ${email} не существует`);
        }

        const isPasswordEquals = await bcrypt.compare(password, user.password);
        if (!isPasswordEquals) {
            throw ApiError.badRequest(`Не верный логин или пароль`);
        }
        
        const dto = userDto(user);
        const token = tokenService.generate(dto);

        return { token, dto };
    }
}

module.exports = new TeacherService();