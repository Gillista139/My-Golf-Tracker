import React from 'react'

const WeatherPage = props => {
  // Add in 5 day, 3 hour forecast to this page
  return (
    <>
      <h1 className='weather-page-title'>Current Weather</h1>
      <div className="weather-current">
        <p className="weather-item"><strong>City: </strong>{props.forecast.city}</p>
        <p className="weather-item"><strong>Temp: </strong>{props.forecast.temp}°F</p>
        <p className="weather-item"><strong>Conditions: </strong>{props.forecast.description}</p>
        <img className="weather-icon" src={`http://openweathermap.org/img/w/${props.forecast.icon}.png`} />
      </div>
    </>
  )
}

export default WeatherPage