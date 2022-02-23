import express from 'express'
import CourseSerializer from '../../../serializers/CourseSerializer.js'
import { Course } from '../../../models/index.js'
import courseScoreCardRouter from './coursesScorecardsRouter.js'
import cleanUserInput from '../../../services/cleanUserInput.js'
import objection from 'objection'
const { ValidationError } = objection

const coursesRouter = new express.Router({ mergeParams: true })

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

coursesRouter.post('/', async (req, res) => {
  const { body } = req
  const formInput = cleanUserInput(body)
  const { name, par, totalHoles } = formInput

  try {
    const newCourse = await Course.query().insertAndFetch({ name, par, totalHoles })
    return res.status(201).json({ course: newCourse })
  } catch (error) {
    if (error instanceof ValidationError) {
      return res.status(422).json({ errors: error.data })
    }
    return res.status(500).json({ errors: error })
  }
})

coursesRouter.use('/:courseId/scorecards', courseScoreCardRouter)

export default coursesRouter
