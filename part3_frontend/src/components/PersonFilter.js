import React from 'react'

const PersonFilter = ({ filter, handleFilterChange }) => {
    return (
        <p>
            filter shown as <input value={filter} onChange={handleFilterChange} />
        </p>
    )
}

export default PersonFilter