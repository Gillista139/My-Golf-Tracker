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

  const oneToNineDistance = (scoreCard.holeOneDistance + scoreCard.holeTwoDistance + scoreCard.holeThreeDistance + scoreCard.holeFourDistance + scoreCard.holeFiveDistance + scoreCard.holeSixDistance + scoreCard.holeSevenDistance + scoreCard.holeEightDistance + scoreCard.holeNineDistance)
  const oneToNinePar = (scoreCard.holeOnePar + scoreCard.holeTwoPar + scoreCard.holeThreePar + scoreCard.holeFourPar + scoreCard.holeFivePar + scoreCard.holeSixPar + scoreCard.holeSevenPar + scoreCard.holeEightPar + scoreCard.holeNinePar)
  const oneToNineScore = (scoreCard.holeOneScore + scoreCard.holeTwoScore + scoreCard.holeThreeScore + scoreCard.holeFourScore + scoreCard.holeFiveScore + scoreCard.holeSixScore + scoreCard.holeSevenScore + scoreCard.holeEightScore + scoreCard.holeNineScore)

  const tenToEighteenDistance = (scoreCard.holeTenDistance + scoreCard.holeElevenDistance + scoreCard.holeTwelveDistance + scoreCard.holeThirteenDistance + scoreCard.holeFourteenDistance + scoreCard.holeFifteenDistance + scoreCard.holeSixteenDistance + scoreCard.holeSeventeenDistance + scoreCard.holeEighteenDistance)
  const tenToEighteenPar = (scoreCard.holeTenPar + scoreCard.holeElevenPar + scoreCard.holeTwelvePar + scoreCard.holeThirteenPar + scoreCard.holeFourteenPar + scoreCard.holeFifteenPar + scoreCard.holeSixteenPar + scoreCard.holeSeventeenPar + scoreCard.holeEighteenPar)
  const tenToEighteenScore = (scoreCard.holeTenScore + scoreCard.holeElevenScore + scoreCard.holeTwelveScore + scoreCard.holeThirteenScore + scoreCard.holeFourteenScore + scoreCard.holeFifteenScore + scoreCard.holeSixteenScore + scoreCard.holeSeventeenScore + scoreCard.holeEighteenScore)

  const totalDistance = (oneToNineDistance + tenToEighteenDistance)
  const totalPar = (oneToNinePar + tenToEighteenPar)
  const totalScore = (oneToNineScore + tenToEighteenScore)

  return (
    <div className="scorecard">
      <div className="scorecard-info">
        <h1 className="course-name">{scoreCard.course.name}</h1>
        <h3 className="scorecard-date">{scoreCard.dateOfRound}</h3>
        <h3 className="scorecard-tees">Played From: {scoreCard.teeColor} Tees</h3>
      </div>
      <div className="scorecard-holes">
        <table>
          <tr>
            <th>Hole</th>
            <th>Distance</th>
            <th>Par</th>
            <th>Score</th>
          </tr>

          <tr>
            <td>1</td>
            <td>{scoreCard.holeOneDistance} yds</td>
            <td>{scoreCard.holeOnePar}</td>
            <td>{scoreCard.holeOneScore}</td>
          </tr>
          <tr>
            <td>2</td>
            <td>{scoreCard.holeTwoDistance} yds</td>
            <td>{scoreCard.holeTwoPar}</td>
            <td>{scoreCard.holeTwoScore}</td>
          </tr>
          <tr>
            <td>3</td>
            <td>{scoreCard.holeThreeDistance} yds</td>
            <td>{scoreCard.holeThreePar}</td>
            <td>{scoreCard.holeThreeScore}</td>
          </tr>
          <tr>
            <td>4</td>
            <td>{scoreCard.holeFourDistance} yds</td>
            <td>{scoreCard.holeFourPar}</td>
            <td>{scoreCard.holeFourScore}</td>
          </tr>
          <tr>
            <td>5</td>
            <td>{scoreCard.holeFiveDistance} yds</td>
            <td>{scoreCard.holeFivePar}</td>
            <td>{scoreCard.holeFiveScore}</td>
          </tr>
          <tr>
            <td>6</td>
            <td>{scoreCard.holeSixDistance} yds</td>
            <td>{scoreCard.holeSixPar}</td>
            <td>{scoreCard.holeSixScore}</td>
          </tr>
          <tr>
            <td>7</td>
            <td>{scoreCard.holeSevenDistance} yds</td>
            <td>{scoreCard.holeSevenPar}</td>
            <td>{scoreCard.holeSevenScore}</td>
          </tr>
          <tr>
            <td>8</td>
            <td>{scoreCard.holeEightDistance} yds</td>
            <td>{scoreCard.holeEightPar}</td>
            <td>{scoreCard.holeEightScore}</td>
          </tr>
          <tr>
            <td>9</td>
            <td>{scoreCard.holeNineDistance} yds</td>
            <td>{scoreCard.holeNinePar}</td>
            <td>{scoreCard.holeNineScore}</td>
          </tr>
          <tr>
            <td>Front</td>
            <td>{oneToNineDistance} yds</td>
            <td>{oneToNinePar}</td>
            <td>{oneToNineScore}</td>
          </tr>

          <tr>
            <td>10</td>
            <td>{scoreCard.holeTenDistance} yds</td>
            <td>{scoreCard.holeTenPar}</td>
            <td>{scoreCard.holeTenScore}</td>
          </tr>
          <tr>
            <td>11</td>
            <td>{scoreCard.holeElevenDistance} yds</td>
            <td>{scoreCard.holeElevenPar}</td>
            <td>{scoreCard.holeElevenScore}</td>
          </tr>
          <tr>
            <td>12</td>
            <td>{scoreCard.holeTwelveDistance} yds</td>
            <td>{scoreCard.holeTwelvePar}</td>
            <td>{scoreCard.holeTwelveScore}</td>
          </tr>
          <tr>
            <td>13</td>
            <td>{scoreCard.holeThirteenDistance} yds</td>
            <td>{scoreCard.holeThirteenPar}</td>
            <td>{scoreCard.holeThirteenScore}</td>
          </tr>
          <tr>
            <td>14</td>
            <td>{scoreCard.holeFourteenDistance} yds</td>
            <td>{scoreCard.holeFourteenPar}</td>
            <td>{scoreCard.holeFourteenScore}</td>
          </tr>
          <tr>
            <td>15</td>
            <td>{scoreCard.holeFifteenDistance} yds</td>
            <td>{scoreCard.holeFifteenPar}</td>
            <td>{scoreCard.holeFifteenScore}</td>
          </tr>
          <tr>
            <td>16</td>
            <td>{scoreCard.holeSixteenDistance} yds</td>
            <td>{scoreCard.holeSixteenPar}</td>
            <td>{scoreCard.holeSixteenScore}</td>
          </tr>
          <tr>
            <td>17</td>
            <td>{scoreCard.holeSeventeenDistance} yds</td>
            <td>{scoreCard.holeSeventeenPar}</td>
            <td>{scoreCard.holeSeventeenScore}</td>
          </tr>
          <tr>
            <td>18</td>
            <td>{scoreCard.holeEighteenDistance} yds</td>
            <td>{scoreCard.holeEighteenPar}</td>
            <td>{scoreCard.holeEighteenScore}</td>
          </tr>
          <tr>
            <td>Back</td>
            <td>{tenToEighteenDistance} yds</td>
            <td>{tenToEighteenPar}</td>
            <td>{tenToEighteenScore}</td>
          </tr>

          <tr>
            <td>Total</td>
            <td>{totalDistance} yds</td>
            <td>{totalPar}</td>
            <td>{totalScore}</td>
          </tr>
          
        </table>
      </div>
    </div>
  )
}

export default ScoreCardShow
