const Model = require('./Model.js')

class ScoreCard extends Model {
  static get tableName() {
    return 'scoreCards'
  }

  static get relationMappings() {
    const Course = require('./Course')
    const User = require('./User')

    return {
      course: {
        relation: Model.BelongsToOneRelation,
        modelClass: Course,
        join: {
          from: 'scoreCards.courseId',
          to: 'courses.id'
        }
      },
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'scoreCards.userId',
          to: 'users.id',
        }
      }
    }
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['teeColor', 'dateOfRound'],
      properties: {
        dateOfRound: {type: 'string'},
        teeColor: {type: 'string'},

        holeOneDistance: {type: ['integer', 'string']},
        holeOnePar: {type: ['integer', 'string']},
        holeOneScore: {type: ['integer', 'string']},

        holeTwoDistance: {type: ['integer', 'string']},
        holeTwoPar: {type: ['integer', 'string']},
        holeTwoScore: {type: ['integer', 'string']},

        holeThreeDistance: {type: ['integer', 'string']},
        holeThreePar: {type: ['integer', 'string']},
        holeThreeScore: {type: ['integer', 'string']},

        holeFourDistance: {type: ['integer', 'string']},
        holeFourPar: {type: ['integer', 'string']},
        holeFourScore: {type: ['integer', 'string']},

        holeFiveDistance: {type: ['integer', 'string']},
        holeFivePar: {type: ['integer', 'string']},
        holeFiveScore: {type: ['integer', 'string']},

        holeSixDistance: {type: ['integer', 'string']},
        holeSixPar: {type: ['integer', 'string']},
        holeSixScore: {type: ['integer', 'string']},

        holeSevenDistance: {type: ['integer', 'string']},
        holeSevenPar: {type: ['integer', 'string']},
        holeSevenScore: {type: ['integer', 'string']},

        holeEightDistance: {type: ['integer', 'string']},
        holeEightPar: {type: ['integer', 'string']},
        holeEightScore: {type: ['integer', 'string']},

        holeNineDistance: {type: ['integer', 'string']},
        holeNinePar: {type: ['integer', 'string']},
        holeNineScore: {type: ['integer', 'string']},

        holeTenDistance: {type: ['integer', 'string']},
        holeTenPar: {type: ['integer', 'string']},
        holeTenScore: {type: ['integer', 'string']},

        holeElevenDistance: {type: ['integer', 'string']},
        holeElevenPar: {type: ['integer', 'string']},
        holeElevenScore: {type: ['integer', 'string']},

        holeTwelveDistance: {type: ['integer', 'string']},
        holeTwelvePar: {type: ['integer', 'string']},
        holeTwelveScore: {type: ['integer', 'string']},

        holeThirteenDistance: {type: ['integer', 'string']},
        holeThirteenPar: {type: ['integer', 'string']},
        holeThirteenScore: {type: ['integer', 'string']},

        holeFourteenDistance: {type: ['integer', 'string']},
        holeFourteenPar: {type: ['integer', 'string']},
        holeFourteenScore: {type: ['integer', 'string']},

        holeFifteenDistance: {type: ['integer', 'string']},
        holeFifteenPar: {type: ['integer', 'string']},
        holeFifteenScore: {type: ['integer', 'string']},

        holeSixteenDistance: {type: ['integer', 'string']},
        holeSixteenPar: {type: ['integer', 'string']},
        holeSixteenScore: {type: ['integer', 'string']},

        holeSeventeenDistance: {type: ['integer', 'string']},
        holeSeventeenPar: {type: ['integer', 'string']},
        holeSeventeenScore: {type: ['integer', 'string']},

        holeEighteenDistance: {type: ['integer', 'string']},
        holeEighteenPar: {type: ['integer', 'string']},
        holeEighteenScore: {type: ['integer', 'string']},

        userId: {type: ['integer', 'string']},
        courseId: {type: ['integer', 'string']}

      }
    }
  }
}

module.exports = ScoreCard