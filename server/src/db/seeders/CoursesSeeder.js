import { Course } from '../../models/index.js'

class CourseSeeder {
  static async seed() {
    const courseData = [
      {name: 'Brockton Country Club', par: 36, totalHoles: 9},
      {name: 'Old Scotland Links', par: 72, totalHoles: 18},
      {name: 'Thorny Lee', par: 72, totalHoles: 18},
      {name: 'The Pines at Fort Eustis', par: 72, totalHoles: 18},
      {name: 'EagleWood at Langley AFB', par: 72, totalHoles: 18},
      {name: 'Sleepy Hole', par: 72, totalHoles: 18},
      {name: 'Golden Horseshoe - Green Course', par: 72, totalHoles: 18},
    ]
    for (const singleCourseData of courseData) {
      const currentCourse = await Course.query().findOne({ name: singleCourseData.name })
      if (!currentCourse) {
        await Course.query().insert(singleCourseData)
      }
    }
  }
}

export default CourseSeeder