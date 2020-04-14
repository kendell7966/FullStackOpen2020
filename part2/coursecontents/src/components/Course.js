import React from 'react'

const Total = ({ parts }) => {
    //console.log(parts)
    let total = parts.reduce((total, part) => total += part.exercises, 0)
    return (
        <div><strong>Number of exercises {total}</strong></div>
    )
}

const Content = ({ parts }) => {
    //console.log(parts)
    return (
        <ul>
            {parts.map(part => <li key={part.id}>{part.name} {part.exercises}</li>)}
        </ul>
    )
}

const Header = ({ name }) => {
    //console.log(name)
    return (
        <h2>{name}</h2>
    )
}

const Course = ({ course }) => {
    //console.log(course.parts)
    return (
        <>
            <Header name={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </>
    )
}

export default Course
