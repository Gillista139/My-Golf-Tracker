import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { hot } from "react-hot-loader/root";

import getCurrentUser from "../services/getCurrentUser";
import "../assets/scss/main.scss";
import RegistrationForm from "./registration/RegistrationForm";
import SignInForm from "./authentication/SignInForm";
import TopBar from "./layout/TopBar";
import CoursesList from "./CoursesList.js";
import CourseShow from './CourseShow.js'
import ScoreCardShow from "./ScoreCardShow.js";
import UserProfile from "./UserProfile.js";
import AuthenticatedRoute from './authentication/AuthenticatedRoute.js'
import HomePage from "./HomePage.js";
import WeatherPage from "./WeatherPage.js";

const App = (props) => {
  const [currentUser, setCurrentUser] = useState(null);
  const fetchCurrentUser = async () => {
    try {
      const user = await getCurrentUser()
      setCurrentUser(user)
    } catch(err) {
      setCurrentUser(null)
    }
  }

  const [forecast, setForecast] = useState({})

  const getYourLocation = () => {
    window.navigator.geolocation.getCurrentPosition(successfulLookup, unsuccessfulLookup)
  }

  const successfulLookup = async (yourLocation) => {
    const lat = yourLocation.coords.latitude
    const long = yourLocation.coords.longitude
    try {
      const response = await fetch (`/api/v1/weather/${lat}&${long}`)
      const body = await response.json()
      setForecast({
        city: body.city,
        temp: body.temp,
        description: body.description,
        icon: body.icon
      })
    } catch(error) {
      console.error(error)
    }
  }
  const unsuccessfulLookup = () => {
    alert('Location blocked.  Please allow this site to use your location for local weather')
  }

  useEffect(() => {
    fetchCurrentUser()
    getYourLocation()
  }, [])

  return (
    <Router>
      <TopBar user={currentUser} />
      <Switch>

        <Route exact path="/">
          <HomePage
            user={currentUser}
            forecast={forecast}
          />
        </Route>
        <AuthenticatedRoute exact path="/profile" component={UserProfile} user={currentUser} />
        <Route exact path="/users/new" component={RegistrationForm} />
        <Route exact path="/user-sessions/new" component={SignInForm} />
        <Route exact path="/weather">
          <WeatherPage
            forecast={forecast}
          />
        </Route>
        <Route exact path='/courses'>
          <CoursesList
            user={currentUser}
            forecast={forecast}
          />
        </Route>
        <Route exact path='/courses/:id'>
          <CourseShow user={currentUser} />
        </Route>
        <Route exact path='/scorecards/:id' component={ScoreCardShow} />
      </Switch>
    </Router>
  );
};

export default hot(App);
