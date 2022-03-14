import React, { useState } from 'react'

const newCourse = ({ postCourse }) => {
  const [newCourse, setNewCourse] = useState({
    name: '',
    par: '',
    totalHoles: ''
  })

  const handleInputChange = (event) => {
    setNewCourse({
      ...newCourse,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const validPost = await postCourse(newCourse)
    if (validPost) {
      clearForm()
    }
  }

  const clearForm = () => {
    setNewCourse({
      name: '',
      par: '',
      totalHoles: ''
    })
  }

  return (
    <div className='new-course-form'>
      <h3>Dont see your course listed above? Add it here!</h3>
      <form onSubmit={handleSubmit}>
        <div className='course-name-field'>
          <label>
            Course Name:
            <input type='text' name='name' onChange={handleInputChange} value={newCourse.name} />
          </label>
        </div>
        <div className='par-and-total-fields'>
          <label>
            Course Par:
            <input type='number' name='par' onChange={handleInputChange} value={newCourse.par} />
          </label>
          <label>
            Total Holes:
            <input type='number' name='totalHoles' onChange={handleInputChange} value={newCourse.totalHoles} />
          </label>
        </div>
        <div className='course-submit'>
          <input className="button" type="submit" value="Submit" />
        </div>
      </form>
    </div>
  )
}

export default newCourse