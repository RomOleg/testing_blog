const moment = require('moment');
const Blog = require('../models/blog');
const User = require('../models/user');

class BlogService {

    async create(user, name) {
        const blog = await Blog.create({ name, userId: user.id, date: moment() });

        return blog;
    }

    async getBlogs() {
        const blogs = await Blog.findAll({
            include: {
                model: User,
            }
        });

        return blogs;
    }

    async getUserBlogs(id) {
        const blogs = await Blog.findAll({ where: { id } });

        return blogs;
    }

    async delete(id) {
        const blogs = await Blog.destroy({ where: { id }});

        return blogs;
    }

    async update(id, name) {
        const blogs = await Blog.update({ name }, { where: { id }});

        return blogs;
    }
}

module.exports = new BlogService();