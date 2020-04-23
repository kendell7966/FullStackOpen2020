import React, { useState, useEffect } from 'react'
import personService from './services/persons'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import PersonFilter from './components/PersonFilter'
import Notification from './components/Notification'

const App = () => {

    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filter, setFilter] = useState('')

    const emptyNotificationObject = { message: null, className: null }
    const [notificationObject, setNotificationObject] = useState(emptyNotificationObject)

    useEffect(() => {
        personService
            .getAll()
            .then(initialPersons => {
                setPersons(initialPersons)
            })
    }, [])

    const notify = (message, className) => {

        const notifyObject = { message, className }
        setNotificationObject(notifyObject)

        setTimeout(() => {
            setNotificationObject(emptyNotificationObject)
        }, 5000)
    }

    const displaySuccess = message => {
        notify(message, "notify")
    }

    const displayError = message => {
        notify(message, "error")
    }

    const updatePerson = (person) => {

        const personObject = { ...person, number: newNumber }

        personService
            .update(personObject.id, personObject)
            .then(personObject => {
                displaySuccess(`Person '${personObject.name}' was updated`)
                setPersons(persons.map(person => person.id !== personObject.id ? person : personObject))
            })
            .catch(error => {
                displayError(`the person with id '${personObject.id}' was already deleted from the server`)
                ensureIdRemoved(personObject.id)
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

        personService
            .create(personObject)
            .then(personObject => {
                displaySuccess(`Person '${personObject.name}' was added`)
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
        let alreadyDeletedMessage = `the person with id '${id}' was already deleted from the server`

        if (person === undefined) {
            displayError(alreadyDeletedMessage)
            ensureIdRemoved(id)
            return
        }

        let confirmDelete = window.confirm(`Delete ${person.name}?`)
        if (confirmDelete === false) {
            return
        }

        personService
            .remove(id)
            .then(() => {
                displaySuccess(`Person '${person.name}' was removed`)
                ensureIdRemoved(id)
            })
            .catch(error => {
                displayError(alreadyDeletedMessage)
                ensureIdRemoved(id)
            })
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <Notification message={notificationObject.message} className={notificationObject.className} />
            <PersonFilter filter={filter} handleFilterChange={handleFilterChange} />
            <PersonForm newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} addName={addName} />
            <h3>Numbers</h3>
            <Persons persons={persons} filter={filter} handleClickDelete={handleClickDelete} />
        </div>
    )
}

export default App