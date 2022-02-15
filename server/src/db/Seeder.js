/* eslint-disable no-console */
import { connection } from "../boot.js"
import CoursesSeeder from './seeders/CoursesSeeder.js'

class Seeder {
  static async seed() {
    console.log('Seeding Courses')
    await CoursesSeeder.seed()

    console.log("Done!")
    await connection.destroy()
  }
}

export default Seeder
