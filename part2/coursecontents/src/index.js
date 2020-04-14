import React from 'react'
import ReactDOM from 'react-dom'
import './index.css';

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
        <h1>{name}</h1>
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

const App = () => {
    const course = {
        id: 1,
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10,
                id: 1
            },
            {
                name: 'Using props to pass data',
                exercises: 7,
                id: 2
            },
            {
                name: 'State of a component',
                exercises: 14,
                id: 3
            },
            {
                name: 'Redux',
                exercises: 11,
                id: 4
            }
        ]
    }

    return (
        <div>
            <Course course={course} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
