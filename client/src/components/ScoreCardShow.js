import React, { useState, useEffect } from 'react'

const ScoreCardShow = (props) => {
  const [scoreCard, setScoreCard] = useState({
    dateOfRound: '',
    teeColor: '',
    holeOneDistance: '',
    holeOnePar: '',
    holeOneScore: '',
    holeTwoDistance: '',
    holeTwoPar: '',
    holeTwoScore: '',
    holeThreeDistance: '',
    holeThreePar: '',
    holeThreeScore: '',
    holeFourDistance: '',
    holeFourPar: '',
    holeFourScore: '',
    holeFiveDistance: '',
    holeFivePar: '',
    holeFiveScore: '',
    holeSixDistance: '',
    holeSixPar: '',
    holeSixScore: '',
    holeSevenDistance: '',
    holeSevenPar: '',
    holeSevenScore: '',
    holeEightDistance: '',
    holeEightPar: '',
    holeEightScore: '',
    holeNineDistance: '',
    holeNinePar: '',
    holeNineScore: '',
    holeTenDistance: '',
    holeTenPar: '',
    holeTenScore: '',
    holeElevenDistance: '',
    holeElevenPar: '',
    holeElevenScore: '',
    holeTwelveDistance: '',
    holeTwelvePar: '',
    holeTwelveScore: '',
    holeThirteenDistance: '',
    holeThirteenPar: '',
    holeThirteenScore: '',
    holeFourteenDistance: '',
    holeFourteenPar: '',
    holeFourteenScore: '',
    holeFifteenDistance: '',
    holeFifteenPar: '',
    holeFifteenScore: '',
    holeSixteenDistance: '',
    holeSixteenPar: '',
    holeSixteenScore: '',
    holeSeventeenDistance: '',
    holeSeventeenPar: '',
    holeSeventeenScore: '',
    holeEighteenDistance: '',
    holeEighteenPar: '',
    holeEighteenScore: '',
    course: {},
  })

  const scoreCardId = props.match.params.id
  console.log(props.match.params)
  const getScore = async () => {
    try {
      const response = await fetch(`/api/v1/scorecards/${scoreCardId}`)
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw error
      }
      const body = await response.json()
      setScoreCard(body.scoreCard)
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`)
    }
  }

  useEffect(() => {
    getScore()
  }, [])

  return (
    <div className="scorecard">
      <div className="scorecard-info">
        <h1 className="course-name">{scoreCard.course.name}</h1>
        <h3 className="scorecard-date">{scoreCard.dateOfRound}</h3>
        <h3 className="scorecard-tees">{scoreCard.teeColor}</h3>
      </div>
      <div className="scorecard-holes">
        <h3 className="hole-callout">Hole 1:</h3>
        <h5 className="scorecard-distance">Hole Distance: {scoreCard.holeOneDistance} yards</h5>
        <h5 className="scorecard-par">Par: {scoreCard.holeOnePar}</h5>
        <h5 className="scorecard-score">{scoreCard.holeOneScore}</h5>
        <h3 className="hole-callout">Hole 2:</h3>
        <h5 className="scorecard-distance">Hole Distance: {scoreCard.holeTwoDistance} yards</h5>
        <h5 className="scorecard-par">Par: {scoreCard.holeTwoPar}</h5>
        <h5 className="scorecard-score">{scoreCard.holeTwoScore}</h5>
        <h3 className="hole-callout">Hole 3:</h3>
        <h5 className="scorecard-distance">Hole Distance: {scoreCard.holeThreeDistance} yards</h5>
        <h5 className="scorecard-par">Par: {scoreCard.holeThreePar}</h5>
        <h5 className="scorecard-score">{scoreCard.holeThreeScore}</h5>
        <h3 className="hole-callout">Hole 4:</h3>
        <h5 className="scorecard-distance">Hole Distance: {scoreCard.holeFourDistance} yards</h5>
        <h5 className="scorecard-par">Par: {scoreCard.holeFourPar}</h5>
        <h5 className="scorecard-score">{scoreCard.holeFourScore}</h5>
        <h3 className="hole-callout">Hole 5:</h3>
        <h5 className="scorecard-distance">Hole Distance: {scoreCard.holeFiveDistance} yards</h5>
        <h5 className="scorecard-par">Par: {scoreCard.holeFivePar}</h5>
        <h5 className="scorecard-score">{scoreCard.holeFiveScore}</h5>
        <h3 className="hole-callout">Hole 6:</h3>
        <h5 className="scorecard-distance">Hole Distance: {scoreCard.holeSixDistance} yards</h5>
        <h5 className="scorecard-par">Par: {scoreCard.holeSixPar}</h5>
        <h5 className="scorecard-score">{scoreCard.holeSixScore}</h5>
        <h3 className="hole-callout">Hole 7:</h3>
        <h5 className="scorecard-distance">Hole Distance: {scoreCard.holeSevenDistance} yards</h5>
        <h5 className="scorecard-par">Par: {scoreCard.holeSevenPar}</h5>
        <h5 className="scorecard-score">{scoreCard.holeSevenScore}</h5>
        <h3 className="hole-callout">Hole 8:</h3>
        <h5 className="scorecard-distance">Hole Distance: {scoreCard.holeEightDistance} yards</h5>
        <h5 className="scorecard-par">Par: {scoreCard.holeEightPar}</h5>
        <h5 className="scorecard-score">{scoreCard.holeEightScore}</h5>
        <h3 className="hole-callout">Hole 9:</h3>
        <h5 className="scorecard-distance">Hole Distance: {scoreCard.holeNineDistance} yards</h5>
        <h5 className="scorecard-par">Par: {scoreCard.holeNinePar}</h5>
        <h5 className="scorecard-score">{scoreCard.holeNineScore}</h5>
        <h3 className="hole-callout">Hole 10:</h3>
        <h5 className="scorecard-distance">Hole Distance: {scoreCard.holeTenDistance} yards</h5>
        <h5 className="scorecard-par">Par: {scoreCard.holeTenPar}</h5>
        <h5 className="scorecard-score">{scoreCard.holeTenScore}</h5>
        <h3 className="hole-callout">Hole 11:</h3>
        <h5 className="scorecard-distance">Hole Distance: {scoreCard.holeElevenDistance} yards</h5>
        <h5 className="scorecard-par">Par: {scoreCard.holeElevenPar}</h5>
        <h5 className="scorecard-score">{scoreCard.holeElevenScore}</h5>
        <h3 className="hole-callout">Hole 12:</h3>
        <h5 className="scorecard-distance">Hole Distance: {scoreCard.holeTwelveDistance} yards</h5>
        <h5 className="scorecard-par">Par: {scoreCard.holeTwelvePar}</h5>
        <h5 className="scorecard-score">{scoreCard.holeTwelveScore}</h5>
        <h3 className="hole-callout">Hole 13:</h3>
        <h5 className="scorecard-distance">
          Hole Distance: {scoreCard.holeThirteenDistance} yards
        </h5>
        <h5 className="scorecard-par">Par: {scoreCard.holeThirteenPar}</h5>
        <h5 className="scorecard-score">{scoreCard.holeThirteenScore}</h5>
        <h3 className="hole-callout">Hole 14:</h3>
        <h5 className="scorecard-distance">
          Hole Distance: {scoreCard.holeFourteenDistance} yards
        </h5>
        <h5 className="scorecard-par">Par: {scoreCard.holeFourteenPar}</h5>
        <h5 className="scorecard-score">{scoreCard.holeFourteenScore}</h5>
        <h3 className="hole-callout">Hole 15:</h3>
        <h5 className="scorecard-distance">Hole Distance: {scoreCard.holeFifteenDistance} yards</h5>
        <h5 className="scorecard-par">Par: {scoreCard.holeFifteenPar}</h5>
        <h5 className="scorecard-score">{scoreCard.holeFifteenScore}</h5>
        <h3 className="hole-callout">Hole 16:</h3>
        <h5 className="scorecard-distance">Hole Distance: {scoreCard.holeSixteenDistance} yards</h5>
        <h5 className="scorecard-par">Par: {scoreCard.holeSixteenPar}</h5>
        <h5 className="scorecard-score">{scoreCard.holeSixteenScore}</h5>
        <h3 className="hole-callout">Hole 17:</h3>
        <h5 className="scorecard-distance">
          Hole Distance: {scoreCard.holeSeventeenDistance} yards
        </h5>
        <h5 className="scorecard-par">Par: {scoreCard.holeSeventeenPar}</h5>
        <h5 className="scorecard-score">{scoreCard.holeSeventeenScore}</h5>
        <h3 className="hole-callout">Hole 18:</h3>
        <h5 className="scorecard-distance">
          Hole Distance: {scoreCard.holeEighteenDistance} yards
        </h5>
        <h5 className="scorecard-par">Par: {scoreCard.holeEighteenPar}</h5>
        <h5 className="scorecard-score">{scoreCard.holeEighteenScore}</h5>
      </div>
    </div>
  )
}

export default ScoreCardShow
