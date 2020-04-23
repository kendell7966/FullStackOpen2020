import React from 'react'

const Person = ({ person, handleClickDelete }) => {
    return (
        <li>
            {person.name} {person.number} <button onClick={handleClickDelete}>delete</button>
        </li>
    )
}

export default Person