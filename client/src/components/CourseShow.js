import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'


const CourseShow = (props) => {

  const [course, setCourse] = useState({
    name: '',
    par: '',
    totalHoles: ''
  })
  
  const courseId = props.match.params.id

  const getCourse = async () => {
    try {
      const response = await fetch(`/api/v1/courses/${courseId}`)
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`;
        const error = new Error(errorMessage);
        throw error;
      }
      const body = await response.json()
      setCourse(body.course)
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`)
    }
  }

  useEffect(() => {
    getCourse()
  }, [])


  return (
    <>
      <div className='course-title'>
        {course.name}:
      </div>
      <div className='info-list'>
        Par: {course.par} Total Holes: {course.totalHoles}
      </div>
    </>
  )
}

export default withRouter(CourseShow)