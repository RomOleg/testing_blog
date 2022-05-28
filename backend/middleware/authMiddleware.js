const ApiError = require("../error/ApiError");
const tokenService = require("../service/tokenService");

module.exports = (req, res, next) => {
    try {
        const authorization = req.headers.authorization;
        if (!authorization) {
            return next(ApiError.unAuthorized());
        }

        const accessToken = authorization.split(' ')[1];
        if (!accessToken) {
            return next(ApiError.unAuthorized());
        }

        const user = tokenService.validationAccess(accessToken);
        if (!user) {
            return next(ApiError.unAuthorized());
        }

        req.user = user;
        next();
    } catch (error) {
        return next(ApiError.unAuthorized());
    }
}