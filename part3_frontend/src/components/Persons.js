import React from 'react'
import Person from './Person'

const Persons = ({ persons, filter, handleClickDelete }) => {
    return (
        <ul>
            {
                persons
                    .filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
                    .map(person => <Person key={person.name} person={person} handleClickDelete={() => handleClickDelete(person.id)} />)
            }
        </ul>
    )
}

export default Persons