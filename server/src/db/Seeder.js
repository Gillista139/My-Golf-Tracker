/* eslint-disable no-console */
import { connection } from "../boot.js"
import CoursesSeeder from './seeders/CoursesSeeder.js'
import ScoreCardSeeder from "./seeders/ScoreCardSeeder.js"
import UsersSeeder from "./seeders/UsersSeeder.js"

class Seeder {
  static async seed() {
    console.log('Seeding Users')
    await UsersSeeder.seed()

    console.log('Seeding Courses')
    await CoursesSeeder.seed()

    console.log('Seeding ScoreCards')
    await ScoreCardSeeder.seed()

    console.log("Done!")
    await connection.destroy()
  }
}

export default Seeder
