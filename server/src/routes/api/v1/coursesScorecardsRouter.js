import express from 'express'
import objection from 'objection'
const { ValidationError } = objection
import { ScoreCard } from '../../../models/index.js'
import cleanUserInput from '../../../services/cleanUserInput.js'

const courseScoreCardsRouter = new express.Router({ mergeParams: true })

courseScoreCardsRouter.post('/', async (req, res) => {
  const { body } = req
  const formInput = cleanUserInput(body)
  const {
    dateOfRound,
    teeColor,
    holeOneDistance,
    holeOnePar,
    holeOneScore,
    holeTwoDistance,
    holeTwoPar,
    holeTwoScore,
    holeThreeDistance,
    holeThreePar,
    holeThreeScore,
    holeFourDistance,
    holeFourPar,
    holeFourScore,
    holeFiveDistance,
    holeFivePar,
    holeFiveScore,
    holeSixDistance,
    holeSixPar,
    holeSixScore,
    holeSevenDistance,
    holeSevenPar,
    holeSevenScore,
    holeEightDistance,
    holeEightPar,
    holeEightScore,
    holeNineDistance,
    holeNinePar,
    holeNineScore,
    holeTenDistance,
    holeTenPar,
    holeTenScore,
    holeElevenDistance,
    holeElevenPar,
    holeElevenScore,
    holeTwelveDistance,
    holeTwelvePar,
    holeTwelveScore,
    holeThirteenDistance,
    holeThirteenPar,
    holeThirteenScore,
    holeFourteenDistance,
    holeFourteenPar,
    holeFourteenScore,
    holeFifteenDistance,
    holeFifteenPar,
    holeFifteenScore,
    holeSixteenDistance,
    holeSixteenPar,
    holeSixteenScore,
    holeSeventeenDistance,
    holeSeventeenPar,
    holeSeventeenScore,
    holeEighteenDistance,
    holeEighteenPar,
    holeEighteenScore
  } = formInput
  const { courseId } = req.params
  const userId = req.user.id

  try {
    const newScore = await ScoreCard.query().insertAndFetch({
      dateOfRound,
      teeColor,
      holeOneDistance,
      holeOnePar,
      holeOneScore,
      holeTwoDistance,
      holeTwoPar,
      holeTwoScore,
      holeThreeDistance,
      holeThreePar,
      holeThreeScore,
      holeFourDistance,
      holeFourPar,
      holeFourScore,
      holeFiveDistance,
      holeFivePar,
      holeFiveScore,
      holeSixDistance,
      holeSixPar,
      holeSixScore,
      holeSevenDistance,
      holeSevenPar,
      holeSevenScore,
      holeEightDistance,
      holeEightPar,
      holeEightScore,
      holeNineDistance,
      holeNinePar,
      holeNineScore,
      holeTenDistance,
      holeTenPar,
      holeTenScore,
      holeElevenDistance,
      holeElevenPar,
      holeElevenScore,
      holeTwelveDistance,
      holeTwelvePar,
      holeTwelveScore,
      holeThirteenDistance,
      holeThirteenPar,
      holeThirteenScore,
      holeFourteenDistance,
      holeFourteenPar,
      holeFourteenScore,
      holeFifteenDistance,
      holeFifteenPar,
      holeFifteenScore,
      holeSixteenDistance,
      holeSixteenPar,
      holeSixteenScore,
      holeSeventeenDistance,
      holeSeventeenPar,
      holeSeventeenScore,
      holeEighteenDistance,
      holeEighteenPar,
      holeEighteenScore,
      courseId,
      userId
    })
    return res.status(201).json({ scoreCard: newScore })
  } catch(error) {
    if (error instanceof ValidationError) {
      return res.status(422).json({ errors: error.data })
    }
    console.log(error)
    return res.status(500).json({ errors: error })
  }
})

export default courseScoreCardsRouter