const ApiError = require('../error/ApiError');
const blogService = require('../service/blogService');

class BlogController {

    async create(req, res, next) {
        try {

            const blogName = req.body.name;

            const blog = await blogService.create(req.user, blogName);

            return res.json(blog);
            
        } catch (error) {
            return next(ApiError.badRequest(error.message));
        }
    }

    async getBlogs(req, res, next) {
        try {
            const blogs = await blogService.getBlogs();

            return res.json(blogs);            
        } catch (error) {
            return next(ApiError.badRequest(error.message));
        }
    }

    async getBlog(req, res, next) {
        try {
            const { id } = req.user;

            const blogs = await blogService.getUserBlogs(id);

            return res.json(blogs);            
        } catch (error) {
            return next(ApiError.badRequest(error.message));
        }
    }

    async delete(req, res, next) {
        try {
            const { id } = req.params;

            await blogService.delete(id);

            return res.json();    
        } catch (error) {
            return next(ApiError.badRequest(error.message));
        }
    }

    async update(req, res, next) {
        try {
            const { id, name } = req.body;

            const blog = await blogService.update(id, name);

            return res.json();    
        } catch (error) {
            return next(ApiError.badRequest(error.message));
        }
    }

}

module.exports = new BlogController();