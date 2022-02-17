import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import ScoreCardTile from './ScoreCardTile'
import NewScoreCardForm from './NewScoreCardForm'
import translateServerErrors from '../services/translateServerErrors'
import ErrorList from './ErrorList'


const CourseShow = (props) => {

  const [course, setCourse] = useState({
    name: '',
    par: '',
    totalHoles: '',
    scoreCards: [],
  })
  const [errors, setErrors] = useState([])
  
  const courseId = props.match.params.id
  const user = props.user

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

  const postScore = async (newScoreData) => {
    try {
      const response = await fetch(`/api/v1/courses/${courseId}/scorecards`, {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json",
        }),
        body: JSON.stringify(newScoreData),
      });

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
        const updatedScoreCards = course.scoreCards.concat(body.scoreCard);
        setErrors([]);
        setCourse({ ...course, scoreCards: updatedScoreCards });
      }
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`);
    }
  }

  let scoreCardsList
  if(!course.scoreCards[0]) {
    scoreCardsList = 'No Score Cards Have Been Added To This Course!'
  } else {
    scoreCardsList = course.scoreCards.map((scoreCardObject) => {
      return <ScoreCardTile key={scoreCardObject.id} {...scoreCardObject} />
    })
  }

  let showForm = <h3>Please sign in or sign up at the top of the page to submit a new Score Card!</h3>;
  if (user) {
    showForm = (
      <>
        <ErrorList errors={errors} />
        <NewScoreCardForm postScore={postScore} />
      </>
    );
  }

  return (
    <>
      <div className='course-title'>
        {course.name}:
      </div>
      <div className='info-list'>
        Par: {course.par} Total Holes: {course.totalHoles}
      </div>
      <div className='list-container'>
        <div className='column-grid'>
          {scoreCardsList}
        </div>
      </div>
      <div className='list-container'>
        {showForm}
      </div>
    </>
  )
}

export default withRouter(CourseShow)