import React, { useState, useEffect } from 'react'
import noteService from './services/notes'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import PersonFilter from './components/PersonFilter'

const App = () => {

    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filter, setFilter] = useState('')

    useEffect(() => {
        noteService
            .getAll()
            .then(initialNotes => {
                setPersons(initialNotes)
            })
    }, [])

    const updatePerson = (person) => {

        const personObject = { ...person, number: newNumber }

        noteService
            .update(personObject.id, personObject)
            .then(personObject => {
                setPersons(persons.map(person => person.id !== personObject.id ? person : personObject))
            })

        setNewName('')
        setNewNumber('')
    }

    const addName = (event) => {
        event.preventDefault()

        let existingPerson = persons.find(person => person.name === newName);
        if (existingPerson !== undefined) {
            let shouldUpdate = window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)
            if (shouldUpdate) {
                updatePerson(existingPerson)
            }
            return
        }

        const personObject = {
            name: newName,
            number: newNumber
        }

        noteService
            .create(personObject)
            .then(personObject => {
                setPersons(persons.concat(personObject))
            })

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

    const ensureIdRemoved = id => {
        setPersons(persons.filter(n => n.id !== id))
    }

    const handleClickDelete = (id) => {
        let person = persons.find(person => person.id === id)

        if (person === undefined) {
            alert(`the person with id '${id}' was already deleted from the server`)
            ensureIdRemoved(id)
            return
        }

        let confirmDelete = window.confirm(`Delete ${person.name}?`)
        if (confirmDelete === false) {
            return
        }

        noteService
            .remove(id)
            .then(() => {
                ensureIdRemoved(id)
            })
            .catch(error => {
                alert(`the person with id '${id}' was already deleted from the server`)
                ensureIdRemoved(id)
            })
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <PersonFilter filter={filter} handleFilterChange={handleFilterChange} />
            <PersonForm newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} addName={addName} />
            <h3>Numbers</h3>
            <Persons persons={persons} filter={filter} handleClickDelete={handleClickDelete} />
        </div>
    )
}

export default App