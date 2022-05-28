const ApiError = require("../error/ApiError");
const userService = require("../service/userService");

class UserController {
  async registration(req, res, next) {
    try {
      const { email, password } = req.body;

      const userData = await userService.registration(email, password);
      res.cookie('accessToken', userData.token, { maxAge: 30 * 60 * 1000, httpOnly: true });

      return res.json({ message: 'Вы зарегистрированы', email: userData.email })
    } catch (error) {
      next(ApiError.internal(error.message));
    }
  }

  async login(req, res, next) {
    try {

      const { email, password } = req.body;

      const userData = await userService.login(email, password);
      res.cookie('accessToken', userData.token, { maxAge: 30 * 60 * 1000, httpOnly: false });
      
      return res.json(userData)
    } catch (error) {
      next(ApiError.internal(error.message));
    }
  }

  async logout(req, res, next) {
    try {

      res.clearCookie('accessToken');
      
      return res.json({ message: 'Вы разлогинены' })
    } catch (error) {
      next(ApiError.internal(error.message));
    }
  }

  async getUser(req, res, next) {
    try {
      
      return res.json({ user: req.user })
    } catch (error) {
      next(ApiError.internal(error.message));
    }
  }

}

module.exports = new UserController();