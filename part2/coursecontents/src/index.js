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

const Courses = ({ courses }) => {
    //console.log(courses)
    return (
        <div>
            <h1>Web Development Curriculum</h1>
            {courses.map((course) => <Course course={course} key={course.id} />)}
        </div>
    )
}

const App = () => {
    const courses = [
        {
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
        },
        {
            id: 2,
            name: 'Node.js',
            parts: [
                {
                    name: 'Routing',
                    exercises: 3,
                    id: 1
                },
                {
                    name: 'Middlewares',
                    exercises: 7,
                    id: 2
                }
            ]
        }
    ]

    return (
        <div>
            <Courses courses={courses} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
