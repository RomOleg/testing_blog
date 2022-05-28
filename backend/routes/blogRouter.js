const Router = require('express');
const blogController = require('../controllers/blogController');
const authMiddleware = require('../middleware/authMiddleware');

const router = new Router()

router.post('/create', authMiddleware, blogController.create);
// router.get('/:id', blogController.getBlog);
router.get('/all', blogController.getBlogs);
router.delete('/:id', authMiddleware, blogController.delete);
router.patch('/', authMiddleware, blogController.update);

module.exports = router;