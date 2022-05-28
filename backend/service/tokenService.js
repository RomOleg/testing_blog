require('dotenv').config()
const jwt = require('jsonwebtoken');

class TokenService {
    generate(payload) {
        const token = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, { expiresIn: '30m' });

        return token;
    }

    validationAccess(token) {
        try {
            const user = jwt.verify(token, process.env.JWT_ACCESS_SECRET);

            return user;
        } catch (error) {
            return null;
        }
    }
}

module.exports = new TokenService();