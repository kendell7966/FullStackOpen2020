import React from 'react'
import WeatherDetail from './WeatherDetail'

const CountryDetail = ({ country }) => {

    return (
        <>
            <h1>{country.name}</h1>
            <p>
                {`capitol ${country.capital}`}
                < br />
                {`population ${country.population}`}
            </p>
            <h2>languages</h2>
            <ul>
                {country.languages.map(language => <li key={language.name}>{language.name}</li>)}
            </ul>
            <img src={country.flag} alt={`${country.name} flag`} width="128px" />
            <WeatherDetail country={country}/>
        </>
    )
}

export default CountryDetail