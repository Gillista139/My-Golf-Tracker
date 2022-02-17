import React from 'react'
import { Link } from 'react-router-dom'

const ScoreCardTile = (scoreCard) => {
  return (
    <div className='scorecard-tile'>
      <Link to={`/scorecards/${scoreCard.id}`}>
        {scoreCard.dateOfRound}
      </Link>
    </div>
  )
}

export default ScoreCardTile