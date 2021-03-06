import { User } from '../../models/index.js'

class UsersSeeder {
  static async seed() {
    const userData = [
      {email: 'golf@golf.com', cryptedPassword: 'golf', name: 'Golfer1'},
      {email: 'matt@matt.com', cryptedPassword: 'matt', name: 'MattLovesToGolf'},
      {email: 'matthew@matthew.com', cryptedPassword: 'matthew', name: 'MatthewGoesForEagle'},
    ]
    for (const singleUserData of userData) {
      const currentUser = await User.query().findOne({email: singleUserData.email})
      if (!currentUser) {
        await User.query().insert(singleUserData)
      }
    }
  }
}

export default UsersSeeder