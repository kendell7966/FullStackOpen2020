import React, { useState, useEffect } from 'react'
import axios from 'axios'

const WeatherDetail = ({ country }) => {

    const [weather, setWeather] = useState()
    const api_key = process.env.REACT_APP_API_KEY
    const weatherUrl = `http://api.weatherstack.com/current?access_key=${api_key}&query=${country.capital}`

    useEffect(() => {
        axios
            .get(weatherUrl)
            .then(response => {
                setWeather(response.data.current)
            })
    })

    if (weather === undefined) {
        return null
    }

    return (
        <>
            <h2>Weather in {country.capital}</h2>
            <div><strong>temperature:</strong> {weather.temperature}</div>
            {weather.weather_icons !== undefined ? weather.weather_icons.map((url, index) => <img key={url} src={url} alt='' />) : null}
            <div><strong>wind:</strong> {weather.wind_speed} direction {weather.wind_dir}</div>
        </>
    )
}

export default WeatherDetail