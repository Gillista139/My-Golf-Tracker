import React, { useState } from 'react'

const NewScoreCardForm = ({ postScore }) => {
  const [newScoreCard, setNewScoreCard] = useState({
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
  })

  const handleInputChange = (event) => {
    setNewScoreCard({
      ...newScoreCard,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const validPost = await postScore(newScoreCard)
    if (validPost) {
      clearForm()
    }
  }

  const clearForm = () => {
    setNewScoreCard({
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
    })
  }

  return (
    <div className='new-scorecard-form'>
      <h3>Add New Score Card:</h3>
      <form onSubmit={handleSubmit}>
        <div className='form-top'>
          <label>
            Date of Round:
            <input type='date' name='dateOfRound' onChange={handleInputChange} value={newScoreCard.dateOfRound} />
          </label>
          <label>
            Tee Color:
            <input type='text' name='teeColor' onChange={handleInputChange} value={newScoreCard.teeColor} />
          </label>
        </div>
        <br />

        <div className='hole-grid'>
          <h5>Hole 1: </h5>
          <label>
            Distance:
            <input type='number' name='holeOneDistance' onChange={handleInputChange} value={newScoreCard.holeOneDistance} className='align-left' />
          </label>
          <label>
            Par:
            <input type='number' name='holeOnePar' onChange={handleInputChange} value={newScoreCard.holeOnePar} className='align-center' />
          </label>
          <label>
            Score:
            <input type='number' name='holeOneScore' onChange={handleInputChange} value={newScoreCard.holeOneScore} className='align-right' />
          </label>
        </div>
        <br />

        <div className='hole-grid'>
          <h5>Hole 2: </h5>
          <label>
            Distance:
            <input type='number' name='holeTwoDistance' onChange={handleInputChange} value={newScoreCard.holeTwoDistance} className='align-left' />
          </label>
          <label>
            Par:
            <input type='number' name='holeTwoPar' onChange={handleInputChange} value={newScoreCard.holeTwoPar} className='align-center' />
          </label>
          <label>
            Score:
            <input type='number' name='holeTwoScore' onChange={handleInputChange} value={newScoreCard.holeTwoScore} className='align-right' />
          </label>
        </div>
        <br />

        <div className='hole-grid'>
          <h5>Hole 3: </h5>
          <label>
            Distance:
            <input type='number' name='holeThreeDistance' onChange={handleInputChange} value={newScoreCard.holeThreeDistance} className='align-left' />
          </label>
          <label>
            Par:
            <input type='number' name='holeThreePar' onChange={handleInputChange} value={newScoreCard.holeThreePar} className='align-center' />
          </label>
          <label>
            Score:
            <input type='number' name='holeThreeScore' onChange={handleInputChange} value={newScoreCard.holeThreeScore} className='align-right' />
          </label>
        </div>
        <br />

        <div className='hole-grid'>
          <h5>Hole 4: </h5>
          <label>
            Distance:
            <input type='number' name='holeFourDistance' onChange={handleInputChange} value={newScoreCard.holeFourDistance} className='align-left' />
          </label>
          <label>
            Par:
            <input type='number' name='holeFourPar' onChange={handleInputChange} value={newScoreCard.holeFourPar} className='align-center' />
          </label>
          <label>
            Score:
            <input type='number' name='holeFourScore' onChange={handleInputChange} value={newScoreCard.holeFourScore} className='align-right' />
          </label>
        </div>
        <br />

        <div className='hole-grid'>
          <h5>Hole 5: </h5>
          <label>
            Distance:
            <input type='number' name='holeFiveDistance' onChange={handleInputChange} value={newScoreCard.holeFiveDistance} className='align-left' />
          </label>
          <label>
            Par:
            <input type='number' name='holeFivePar' onChange={handleInputChange} value={newScoreCard.holeFivePar} className='align-center' />
          </label>
          <label>
            Score:
            <input type='number' name='holeFiveScore' onChange={handleInputChange} value={newScoreCard.holeFiveScore} className='align-right' />
          </label>
        </div>
        <br />

        <div className='hole-grid'>
          <h5>Hole 6: </h5>
          <label>
            Distance:
            <input type='number' name='holeSixDistance' onChange={handleInputChange} value={newScoreCard.holeSixDistance} className='align-left' />
          </label>
          <label>
            Par:
            <input type='number' name='holeSixPar' onChange={handleInputChange} value={newScoreCard.holeSixPar} className='align-center' />
          </label>
          <label>
            Score:
            <input type='number' name='holeSixScore' onChange={handleInputChange} value={newScoreCard.holeSixScore} className='align-right' />
          </label>
        </div>
        <br />

        <div className='hole-grid'>
          <h5>Hole 7: </h5>
          <label>
            Distance:
            <input type='number' name='holeSevenDistance' onChange={handleInputChange} value={newScoreCard.holeSevenDistance} className='align-left' />
          </label>
          <label>
            Par:
            <input type='number' name='holeSevenPar' onChange={handleInputChange} value={newScoreCard.holeSevenPar} className='align-center' />
          </label>
          <label>
            Score:
            <input type='number' name='holeSevenScore' onChange={handleInputChange} value={newScoreCard.holeSevenScore} className='align-right' />
          </label>
        </div>
        <br />

        <div className='hole-grid'>
          <h5>Hole 8: </h5>
          <label>
            Distance:
            <input type='number' name='holeEightDistance' onChange={handleInputChange} value={newScoreCard.holeEightDistance} className='align-left' />
          </label>
          <label>
            Par:
            <input type='number' name='holeEightPar' onChange={handleInputChange} value={newScoreCard.holeEightPar} className='align-center' />
          </label>
          <label>
            Score:
            <input type='number' name='holeEightScore' onChange={handleInputChange} value={newScoreCard.holeEightScore} className='align-right' />
          </label>
        </div>
        <br />

        <div className='hole-grid'>
          <h5>Hole 9: </h5>
          <label>
            Distance:
            <input type='number' name='holeNineDistance' onChange={handleInputChange} value={newScoreCard.holeNineDistance} className='align-left' />
          </label>
          <label>
            Par:
            <input type='number' name='holeNinePar' onChange={handleInputChange} value={newScoreCard.holeNinePar} className='align-center' />
          </label>
          <label>
            Score:
            <input type='number' name='holeNineScore' onChange={handleInputChange} value={newScoreCard.holeNineScore} className='align-right' />
          </label>
        </div>
        <br />

        <div className='hole-grid'>
          <h5>Hole 10: </h5>
          <label>
            Distance:
            <input type='number' name='holeTenDistance' onChange={handleInputChange} value={newScoreCard.holeTenDistance} className='align-left' />
          </label>
          <label>
            Par:
            <input type='number' name='holeTenPar' onChange={handleInputChange} value={newScoreCard.holeTenPar} className='align-center' />
          </label>
          <label>
            Score:
            <input type='number' name='holeTenScore' onChange={handleInputChange} value={newScoreCard.holeTenScore} className='align-right' />
          </label>
        </div>
        <br />

        <div className='hole-grid'>
          <h5>Hole 11: </h5>
          <label>
            Distance:
            <input type='number' name='holeElevenDistance' onChange={handleInputChange} value={newScoreCard.holeElevenDistance} className='align-left' />
          </label>
          <label>
            Par:
            <input type='number' name='holeElevenPar' onChange={handleInputChange} value={newScoreCard.holeElevenPar} className='align-center' />
          </label>
          <label>
            Score:
            <input type='number' name='holeElevenScore' onChange={handleInputChange} value={newScoreCard.holeElevenScore} className='align-right' />
          </label>
        </div>
        <br />

        <div className='hole-grid'>
          <h5>Hole 12: </h5>
          <label>
            Distance:
            <input type='number' name='holeTwelveDistance' onChange={handleInputChange} value={newScoreCard.holeTwelveDistance} className='align-left' />
          </label>
          <label>
            Par:
            <input type='number' name='holeTwelvePar' onChange={handleInputChange} value={newScoreCard.holeTwelvePar} className='align-center' />
          </label>
          <label>
            Score:
            <input type='number' name='holeTwelveScore' onChange={handleInputChange} value={newScoreCard.holeTwelveScore} className='align-right' />
          </label>
        </div>
        <br />

        <div className='hole-grid'>
          <h5>Hole 13: </h5>
          <label>
            Distance:
            <input type='number' name='holeThirteenDistance' onChange={handleInputChange} value={newScoreCard.holeThirteenDistance} className='align-left' />
          </label>
          <label>
            Par:
            <input type='number' name='holeThirteenPar' onChange={handleInputChange} value={newScoreCard.holeThirteenPar} className='align-center' />
          </label>
          <label>
            Score:
            <input type='number' name='holeThirteenScore' onChange={handleInputChange} value={newScoreCard.holeThirteenScore} className='align-right' />
          </label>
        </div>
        <br />

        <div className='hole-grid'>
          <h5>Hole 14: </h5>
          <label>
            Distance:
            <input type='number' name='holeFourteenDistance' onChange={handleInputChange} value={newScoreCard.holeFourteenDistance} className='align-left' />
          </label>
          <label>
            Par:
            <input type='number' name='holeFourteenPar' onChange={handleInputChange} value={newScoreCard.holeFourteenPar} className='align-center' />
          </label>
          <label>
            Score:
            <input type='number' name='holeFourteenScore' onChange={handleInputChange} value={newScoreCard.holeFourteenScore} className='align-right' />
          </label>
        </div>
        <br />

        <div className='hole-grid'>
          <h5>Hole 15: </h5>
          <label>
            Distance:
            <input type='number' name='holeFifteenDistance' onChange={handleInputChange} value={newScoreCard.holeFifteenDistance} className='align-left' />
          </label>
          <label>
            Par:
            <input type='number' name='holeFifteenPar' onChange={handleInputChange} value={newScoreCard.holeFifteenPar} className='align-center' />
          </label>
          <label>
            Score:
            <input type='number' name='holeFifteenScore' onChange={handleInputChange} value={newScoreCard.holeFifteenScore} className='align-right' />
          </label>
        </div>
        <br />

        <div className='hole-grid'>
          <h5>Hole 16: </h5>
          <label>
            Distance:
            <input type='number' name='holeSixteenDistance' onChange={handleInputChange} value={newScoreCard.holeSixteenDistance} className='align-left' />
          </label>
          <label>
            Par:
            <input type='number' name='holeSixteenPar' onChange={handleInputChange} value={newScoreCard.holeSixteenPar} className='align-center' />
          </label>
          <label>
            Score:
            <input type='number' name='holeSixteenScore' onChange={handleInputChange} value={newScoreCard.holeSixteenScore} className='align-right' />
          </label>
        </div>
        <br />

        <div className='hole-grid'>
          <h5>Hole 17: </h5>
          <label>
            Distance:
            <input type='number' name='holeSeventeenDistance' onChange={handleInputChange} value={newScoreCard.holeSeventeenDistance} className='align-left' />
          </label>
          <label>
            Par:
            <input type='number' name='holeSeventeenPar' onChange={handleInputChange} value={newScoreCard.holeSeventeenPar} className='align-center' />
          </label>
          <label>
            Score:
            <input type='number' name='holeSeventeenScore' onChange={handleInputChange} value={newScoreCard.holeSeventeenScore} className='align-right' />
          </label>
        </div>
        <br />

        <div className='hole-grid'>
          <h5>Hole 18: </h5>
          <label>
            Distance:
            <input type='number' name='holeEighteenDistance' onChange={handleInputChange} value={newScoreCard.holeEighteenDistance} className='align-left' />
          </label>
          <label>
            Par:
            <input type='number' name='holeEighteenPar' onChange={handleInputChange} value={newScoreCard.holeEighteenPar} className='align-center' />
          </label>
          <label>
            Score:
            <input type='number' name='holeEighteenScore' onChange={handleInputChange} value={newScoreCard.holeEighteenScore} className='align-right' />
          </label>
        </div>
        <br />

        <div className='score-submit'>
          <input className="button" type="submit" value="Submit" />
        </div>

      </form>
    </div>
  )
}

export default NewScoreCardForm
