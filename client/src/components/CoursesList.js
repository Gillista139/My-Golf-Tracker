import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'
import NewCourse from './NewCourse.js'
import ErrorList from './ErrorList.js'
import translateServerErrors from '../services/translateServerErrors.js'


const CoursesList = (props) => {
  const [courses, setCourses] = useState([])
  const [errors, setErrors] = useState([])
  const user = props.user

  const getCourses = async () => {
    try{
    const response = await fetch('/api/v1/courses')
    if (!response.ok) {
      const errorMessage = `${response.status} (${response.statusText})`;
      const error = new Error(errorMessage);
      throw error;
    }
    const body = await response.json()
    setCourses(body.courses)
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`)
    }
  }

  useEffect(() => {
    getCourses()
  }, [])

  const postCourse = async (newCourseData) => {
    try {
      const response = await fetch('/api/v1/courses', {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json",
        }),
        body: JSON.stringify(newCourseData),
      })

      if (!response.ok) {
        if (response.status === 422) {
          const body = await response.json();
          const newErrors = translateServerErrors(body.errors);
          return setErrors(newErrors);
        } else {
          const errorMessage = `${response.status} (${response.statusText})`;
          const error = new Error(errorMessage);
          throw error;
        }
      } else {
        const body = await response.json();
        const updatedCourses = courses.concat(body.course);
        setErrors([]);
        setCourses(updatedCourses);
        return true
      }
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`);
    }
  }

  let showForm = <h3>Dont see your course? Sign in or Sign up to add your course!</h3>;
  if (user) {
    showForm = (
      <>
        <ErrorList errors={errors} />
        <NewCourse postCourse={postCourse} />
      </>
    );
  }

  const coursesListItems = courses.map((course) => {
    return (
      <div className='courseTile' key={course.id}>
        <Link to={`/courses/${course.id}`}>{course.name}</Link>
      </div>
    )
  })

  return (
    <>
      <div className="weather-current">
          <p className="weather-item"><strong>City: </strong>{props.forecast.city}</p>
          <p className="weather-item"><strong>Temp: </strong>{props.forecast.temp}°F</p>
          <p className="weather-item"><strong>Conditions: </strong>{props.forecast.description}</p>
          <img className="weather-icon" src={`http://openweathermap.org/img/w/${props.forecast.icon}.png`} />
        </div>
      <div className='call-to-action'>
        <h3 className='click-here'>Click on a Course to see more info!</h3>
      </div>
      <div className='list-container'>
        <div className='column-grid'>
          {coursesListItems}
        </div>
      </div>
      <div className='list-container'>
        <div className='course-form'>
          {showForm}
        </div>
      </div>
    </>
  )

}

export default withRouter(CoursesList)