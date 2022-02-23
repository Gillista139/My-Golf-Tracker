import React from 'react'

const HomePage = props => {
  return (
    <>
      <div className="weather-current">
        <p className="weather-item"><strong>City: </strong>{props.forecast.city}</p>
        <p className="weather-item"><strong>Temp: </strong>{props.forecast.temp}°F</p>
        <p className="weather-item"><strong>Conditions: </strong>{props.forecast.description}</p>
        <img className="weather-icon" src={`http://openweathermap.org/img/w/${props.forecast.icon}.png`} />
      </div>
      <h1 className='app-title'>My Golf Tracker</h1>
      <div className='app-description'>
        <p>Welcome to My Golf Tracker!
          This app was created by Matthew Gillis as part of his Launch Academy Breakable Toy!
          My Golf Tracker was created utilizing skills learned throughout the JavaScript/Node.js Curriculum.
          Languages used include but are not limited to: JavaScript, React, Express, CSS, HTML, SQL, and more!
          Checkout my code on GitHub.com! Link Below!
        </p>
        <p>Visit the Courses page to find your course and input your own scores!</p>
        <a href='https://github.com/Gillista139/My-Golf-Tracker'>GitHub - My Golf Tracker</a>
      </div>

      <div className='app-description'>
        <p>Upcoming Features!</p>
        <ul>
          <li>7 Day Forecast on Weather Page!</li>
          <li>API to Search For Courses!</li>
          <li>Usernames!</li>
          <li>Edit Score Card Function!</li>
          <li>Memorable Shot Blog!</li>
        </ul>
      </div>
  </>
  )
}

export default HomePage