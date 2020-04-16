import React from 'react'

const CountriesFilter = ({ filter, handleFilterChange }) => {
    return (
        <p>
            find countries <input value={filter} onChange={handleFilterChange} />
        </p>
    )
}

export default CountriesFilter