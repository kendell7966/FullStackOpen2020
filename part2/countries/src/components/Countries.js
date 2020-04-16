import React from 'react'
import Country from './Country'
import CountryDetail from './CountryDetail'

const Countries = ({ countries, filter }) => {
    let filtered = countries.filter(country => country.name.toLowerCase().includes(filter.toLowerCase()))
    if (filtered.length > 10) {
        return (
            <div>Too many matches, specify another filter</div>
        )
    }

    if (filtered.length === 1) {
        return (
            <CountryDetail country={filtered[0]} />
        )
    }

    return (
        <ul>
            {
                filtered.map(country => <Country key={country.name} country={country} />)
            }
        </ul>
    )
}

export default Countries