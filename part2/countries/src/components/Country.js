import React from 'react'

const Country = ({ country, handleClick }) => {
    // NOTE: see NOTES in the Countries component, the onClick attribute below can be set in two ways depending on how the function is setup:
    //  - using 'currying' - do not use the '() =>' syntax (see makeSelectCountryCall(), this is an event handler (commented))
    //  - not using 'currying' - must use the '() =>' syntax
    return (
        <li>
            {country.name}
            <button onClick={() => handleClick(country)}>Show</button>
        </li>
    )
}

export default Country