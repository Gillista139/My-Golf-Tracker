import express from 'express'
import CourseSerializer from '../../../serializers/CourseSerializer.js'
import { Course } from '../../../models/index.js'
import courseScoreCardRouter from './coursesScorecardsRouter.js'

const coursesRouter = new express.Router()

coursesRouter.get('/', async (req, res) => {
  try{
    const courses = await Course.query()
    const serializedCourses = await Promise.all(
      courses.map(async (course) => {
        return CourseSerializer.getSummary(course)
      })
    )
    return res.status(200).json({ courses: serializedCourses })
  } catch(error) {
    return res.status(500).json({ errors: error })
  }
})

coursesRouter.get('/:id', async (req, res) => {
  const courseIndex = req.params.id
  try {
    const course = await Course.query().findById(courseIndex)
    const serializedCourse = await CourseSerializer.getDetails(course)
    return res.status(200).json({ course: serializedCourse })
  } catch(error) {
    return res.status(500).json({ errors: error })
  }
})

coursesRouter.use('/:courseId/scorecards', courseScoreCardRouter)

export default coursesRouter