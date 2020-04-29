var _ = require('lodash');

const dummy = (blogs) => {
    return 1
}

const totalLikes = (blogs) => {
    const reducer = (sum, blog) => {
        return sum + blog.likes
    }

    return blogs.reduce(reducer, 0)
}

const favoriteBlog = (blogs) => {
    if (blogs.length === 0) {
        return null
    }

    const sortedBlogs = [ ...blogs ]
    sortedBlogs.sort((a, b) => a.likes < b.likes)
    const best = sortedBlogs[0]

    return {
        title: best.title,
        author: best.author,
        likes: best.likes
    }
}

const mostBlogs = (blogs) => {
    const result = _.chain(blogs)
        .map('author')                                          // get only author name
        .groupBy(_.identity)                                    // group by similar names
        .map(m => ({ author: _.first(m), blogs: m.length }))    // change to desired object
        .reduce((acc, i) => acc.blogs > i.blogs ? acc : i)      // find the record with the most blogs
        .value()                                                // evaluate

    return result
}

const mostLikes = (blogs) => {
    const result = _.chain(blogs)
        .map('author')                                          // get only author name
        .groupBy(_.identity)                                    // group by similar names
        .map(m => {                                             // change to desired object
            return {
                author: _.first(m),
                likes: _(blogs)
                    .filter(blog => blog.author === _.first(m)) // filter all blogs by author
                    .sumBy('likes', (blog) => { blog.likes })   // count the likes this author
            }
        })
        .reduce((acc, i) => acc.likes > i.likes ? acc : i)      // find the record with the most blogs
        .value()                                                // evaluate

    return result
}

module.exports = {
    dummy,
    totalLikes,
    favoriteBlog,
    mostBlogs,
    mostLikes
}