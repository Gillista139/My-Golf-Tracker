import { ScoreCard } from "../../models/index.js";
import { Course } from "../../models/index.js";
import { User } from "../../models/index.js";

class ScoreCardSeeder {
  static async seed() {
    const scoreCardData = [
      {
        dateOfRound: '28 November 2021',
        teeColor: 'Blue',

        holeOneDistance: 361,
        holeOnePar: 4,
        holeOneScore: 5,

        holeTwoDistance: 159,
        holeTwoPar: 3,
        holeTwoScore: 3,

        holeThreeDistance: 566,
        holeThreePar: 5,
        holeThreeScore: 6,

        holeFourDistance: 376,
        holeFourPar: 4,
        holeFourScore: 4,

        holeFiveDistance: 252,
        holeFivePar: 4,
        holeFiveScore: 5,

        holeSixDistance: 463,
        holeSixPar: 5,
        holeSixScore: 5,

        holeSevenDistance: 193,
        holeSevenPar: 3,
        holeSevenScore: 4,

        holeEightDistance: 445,
        holeEightPar: 5,
        holeEightScore: 5,

        holeNineDistance: 187,
        holeNinePar: 3,
        holeNineScore: 4,

        holeTenDistance: 340,
        holeTenPar: 4,
        holeTenScore: 4,

        holeElevenDistance: 143,
        holeElevenPar: 3,
        holeElevenScore: 3,

        holeTwelveDistance: 516,
        holeTwelvePar: 5,
        holeTwelveScore: 6,

        holeThirteenDistance: 414,
        holeThirteenPar: 4,
        holeThirteenScore: 5,

        holeFourteenDistance: 269,
        holeFourteenPar: 4,
        holeFourteenScore: 4,

        holeFifteenDistance: 471,
        holeFifteenPar: 5,
        holeFifteenScore: 6,

        holeSixteenDistance: 203,
        holeSixteenPar: 3,
        holeSixteenScore: 3,

        holeSeventeenDistance: 478,
        holeSeventeenPar: 5,
        holeSeventeenScore: 6,

        holeEighteenDistance: 205,
        holeEighteenPar: 3,
        holeEighteenScore: 3,

        courseId: (await Course.query().findOne({ name: 'Brockton Country Club' })).id,
        userId: (await User.query().findOne({ email: 'golf@golf.com' })).id
      }
    ]

    for (const singleScoreCardData of scoreCardData) {
      const currentData = await ScoreCard.query().findOne({ dateOfRound: singleScoreCardData.dateOfRound })
      if (!currentData) {
        await ScoreCard.query().insert(singleScoreCardData)
      }
    }
  }
}

export default ScoreCardSeeder