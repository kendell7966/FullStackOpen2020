const blogsRouter = require('express').Router()
const Blog = require('../models/blog')

blogsRouter.get('/', async (request, response) => {
    const blogs = await Blog.find({})
    response.json(blogs)
})

blogsRouter.post('/', async (request, response) => {
    const { title, author, url, likes } = request.body

    if (title === undefined || author === undefined || url === undefined) {
        response.status(400).end()
    }

    const newBlog = {
        title,
        author,
        url,
        likes: likes || 0
    }

    const blog = new Blog(newBlog)

    const result = await blog.save()
    response.json(result.toJSON())
})

module.exports = blogsRouter