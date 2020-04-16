import React from 'react'
import Country from './Country'
import CountryDetail from './CountryDetail'

const Countries = ({ countries, filter, setFilter }) => {

    //// NOTE: use this version if 'currying' (no need to call using '() =>') (see onClick in the Country component)
    //const makeSelectCountryCall = (country) => event => {
    //    selectCountry(country)
    //}

    // NOTE: call this directly using () => syntax on the caller if not using 'currying' (see onClick in the Country component)
    const selectCountry = (country) => {
        setFilter(country.name)
    }

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
                filtered.map(country => <Country key={country.name} country={country} handleClick={selectCountry} />)
            }
        </ul>
    )
}

export default Countries