const Model = require('./Model.js')

class Course extends Model {
  static get tableName() {
    return 'courses'
  }

  static get relationMappings() {
    const ScoreCard = require('./ScoreCard')

    return {
      scoreCards: {
        relation: Model.HasManyRelation,
        modelClass: ScoreCard,
        join: {
          from: 'courses.id',
          to: 'scoreCards.courseId'
        }
      },
    }
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name', 'par', 'totalHoles'],
      properties: {
        name: {type: 'string'},
        par: {type: ['integer', 'string']},
        totalHoles: {type: ['integer', 'string']},
      }
    }
  }
}

module.exports = Course