import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CountriesFilter from './components/CountriesFilter'
import Countries from './components/Countries'

const App = () => {

    const [countries, setCountries] = useState([])
    const [filter, setFilter] = useState('')

    useEffect(() => {
        axios
            .get('https://restcountries.eu/rest/v2/all')
            .then(response => {
                setCountries(response.data)
            })
    }, [])

    const handleFilterChange = (event) => {
        setFilter(event.target.value)
    }

    return (
        <div>
            <CountriesFilter filter={filter} handleFilterChange={handleFilterChange} />
            <Countries countries={countries} filter={filter} setFilter={setFilter} />
        </div>
    )
}

export default App