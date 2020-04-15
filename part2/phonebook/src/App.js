import React, { useState } from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import PersonFilter from './components/PersonFilter'

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '33-44-567890' },
        { name: 'Ada Lovelace', number: '39-44-5323523' },
        { name: 'Dan Abramov', number: '12-43-234345' },
        { name: 'Mary Poppendieck', number: '39-23-6423122' }
    ])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filter, setFilter] = useState('')

    const addName = (event) => {
        event.preventDefault()

        let existingIndex = persons.find(person => person.name === newName);
        if (existingIndex !== undefined) {
            alert(`${newName} is already added to phonebook`)
            return
        }

        const personObject = {
            name: newName,
            number: newNumber
        }

        setPersons(persons.concat(personObject))
        setNewName('')
        setNewNumber('')
    }

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }

    const handleFilterChange = (event) => {
        setFilter(event.target.value)
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <PersonFilter filter={filter} handleFilterChange={handleFilterChange} />
            <PersonForm newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} addName={addName} />
            <h3>Numbers</h3>
            <Persons persons={persons} filter={filter} />
        </div>
    )
}

export default App