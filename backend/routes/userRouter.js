const Router = require('express');
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

const router = new Router()

router.post('/registration', userController.registration);
router.post('/login', userController.login)
router.post('/logout', userController.logout);
router.get('/user',  authMiddleware, userController.getUser)

module.exports = router;