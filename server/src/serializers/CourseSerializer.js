import ScoreCardSerializer from "./ScoreCardSerializer.js"

class CourseSerializer {

  static getSummary(course) {
    const allowedAttributes = ['id', 'name', 'par', 'totalHoles']
    let serializedCourse = {}
    for (const attribute of allowedAttributes) {
      serializedCourse[attribute] = course[attribute]
    }
    return serializedCourse
  }

  static async getDetails(course) {
    const serializedCourse = this.getSummary(course)
    const relatedScoreCards = await course.$relatedQuery('scoreCards')
    const serializedScoreCards = await Promise.all(
      relatedScoreCards.map(async (scoreCard) => ScoreCardSerializer.getSummary(scoreCard))
    )
    serializedCourse.scoreCards = serializedScoreCards
    
    return serializedCourse
  }
}

export default CourseSerializer