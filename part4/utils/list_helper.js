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

module.exports = {
    dummy,
    totalLikes,
    favoriteBlog
}