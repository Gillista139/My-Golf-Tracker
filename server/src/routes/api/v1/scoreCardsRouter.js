import express from 'express'
import ScoreCardSerializer from '../../../serializers/ScoreCardSerializer.js'

import { ScoreCard } from '../../../models/index.js'

const scoreCardsRouter = new express.Router()

scoreCardsRouter.get('/', async (req, res) => {
  try {
    const scoreCards = await ScoreCard.query()
    const serializedScoreCards = await Promise.all(
      scoreCards.map(async (scoreCard) => {
        return ScoreCardSerializer.getSummary(scoreCard)
      })
    )
    return res.status(200).json({ scoreCards: serializedScoreCards })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ errors: error })
  }
})

scoreCardsRouter.get('/:id', async (req, res) => {
  const scoreCardIndex = req.params.id
  try {
    const scoreCard = await ScoreCard.query().findById(scoreCardIndex)
    const serializedScoreCard = ScoreCardSerializer.getSummary(scoreCard)
    serializedScoreCard.course = await scoreCard.$relatedQuery('course')
    serializedScoreCard.user = await scoreCard.$relatedQuery('user')
    return res.status(200).json({ scoreCard: serializedScoreCard })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ errors: error })
  }
})

export default scoreCardsRouter