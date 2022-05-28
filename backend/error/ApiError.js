class ApiError extends Error{
    constructor(status, message) {
        super();
        this.status = status
        this.message = message
    }

    static unAuthorized() {
        return new ApiError(401, 'Пользователь не авторизован');
    }

    static badRequest(message) {
        return new ApiError(400, message)
    }

    static internal(message) {
        return new ApiError(500, message)
    }
}

module.exports = ApiError
