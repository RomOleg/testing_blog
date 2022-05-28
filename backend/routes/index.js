const Router = require('express');
const userRouter = require('./userRouter');
const blogRouter = require('./blogRouter');
const router = new Router()

router.use('/', userRouter);
router.use('/blog', blogRouter);

module.exports = router
