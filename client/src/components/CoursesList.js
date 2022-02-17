import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const CoursesList = (props) => {
  const [courses, setCourses] = useState([])

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

  const coursesListItems = courses.map((course) => {
    return (
      <div className='courseTile' key={course.id}>
        <Link to={`/courses/${course.id}`}>{course.name}</Link>
      </div>
    )
  })

  return (
    <>
      <div className='call-to-action'>
        <h3 className='info-box'>Click on a Course to see more info!</h3>
      </div>
      <div className='list-container'>
        <div className='column-grid'>
          {coursesListItems}
        </div>
      </div>
    </>
  )

}

export default CoursesList