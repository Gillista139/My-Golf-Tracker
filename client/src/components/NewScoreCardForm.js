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
      <h1>Add New Score Card:</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Date of Round:
          <input type='text' name='dateOfRound' onChange={handleInputChange} value={newScoreCard.dateOfRound} />
        </label>
        <label>
          Tee Color:
          <input type='text' name='teeColor' onChange={handleInputChange} value={newScoreCard.teeColor} />
        </label>
        <label>
          Hole One Distance:
          <input type='text' name='holeOneDistance' onChange={handleInputChange} value={newScoreCard.holeOneDistance} />
        </label>
        <label>
          Hole One Par:
          <input type='text' name='holeOnePar' onChange={handleInputChange} value={newScoreCard.holeOnePar} />
        </label>
        <label>
          Hole One Score:
          <input type='text' name='holeOneScore' onChange={handleInputChange} value={newScoreCard.holeOneScore} />
        </label>
        <label>
          Hole Two Distance:
          <input type='text' name='holeTwoDistance' onChange={handleInputChange} value={newScoreCard.holeTwoDistance} />
        </label>
        <label>
          Hole Two Par:
          <input type='text' name='holeTwoPar' onChange={handleInputChange} value={newScoreCard.holeTwoPar} />
        </label>
        <label>
          Hole Two Score:
          <input type='text' name='holeTwoScore' onChange={handleInputChange} value={newScoreCard.holeTwoScore} />
        </label>
        <label>
          Hole Three Distance:
          <input type='text' name='holeThreeDistance' onChange={handleInputChange} value={newScoreCard.holeThreeDistance} />
        </label>
        <label>
          Hole Three Par:
          <input type='text' name='holeThreePar' onChange={handleInputChange} value={newScoreCard.holeThreePar} />
        </label>
        <label>
          Hole Three Score:
          <input type='text' name='holeThreeScore' onChange={handleInputChange} value={newScoreCard.holeThreeScore} />
        </label>
        <label>
          Hole Four Distance:
          <input type='text' name='holeFourDistance' onChange={handleInputChange} value={newScoreCard.holeFourDistance} />
        </label>
        <label>
          Hole Four Par:
          <input type='text' name='holeFourPar' onChange={handleInputChange} value={newScoreCard.holeFourPar} />
        </label>
        <label>
          Hole Four Score:
          <input type='text' name='holeFourScore' onChange={handleInputChange} value={newScoreCard.holeFourScore} />
        </label>
        <label>
          Hole Five Distance:
          <input type='text' name='holeFiveDistance' onChange={handleInputChange} value={newScoreCard.holeFiveDistance} />
        </label>
        <label>
          Hole Five Par:
          <input type='text' name='holeFivePar' onChange={handleInputChange} value={newScoreCard.holeFivePar} />
        </label>
        <label>
          Hole Five Score:
          <input type='text' name='holeFiveScore' onChange={handleInputChange} value={newScoreCard.holeFiveScore} />
        </label>
        <label>
          Hole Six Distance:
          <input type='text' name='holeSixDistance' onChange={handleInputChange} value={newScoreCard.holeSixDistance} />
        </label>
        <label>
          Hole Six Par:
          <input type='text' name='holeSixPar' onChange={handleInputChange} value={newScoreCard.holeSixPar} />
        </label>
        <label>
          Hole Six Score:
          <input type='text' name='holeSixScore' onChange={handleInputChange} value={newScoreCard.holeSixScore} />
        </label>
        <label>
          Hole Seven Distance:
          <input type='text' name='holeSevenDistance' onChange={handleInputChange} value={newScoreCard.holeSevenDistance} />
        </label>
        <label>
          Hole Seven Par:
          <input type='text' name='holeSevenPar' onChange={handleInputChange} value={newScoreCard.holeSevenPar} />
        </label>
        <label>
          Hole Seven Score:
          <input type='text' name='holeSevenScore' onChange={handleInputChange} value={newScoreCard.holeSevenScore} />
        </label>
        <label>
          Hole Eight Distance:
          <input type='text' name='holeEightDistance' onChange={handleInputChange} value={newScoreCard.holeEightDistance} />
        </label>
        <label>
          Hole Eight Par:
          <input type='text' name='holeEightPar' onChange={handleInputChange} value={newScoreCard.holeEightPar} />
        </label>
        <label>
          Hole Eight Score:
          <input type='text' name='holeEightScore' onChange={handleInputChange} value={newScoreCard.holeEightScore} />
        </label>
        <label>
          Hole Nine Distance:
          <input type='text' name='holeNineDistance' onChange={handleInputChange} value={newScoreCard.holeNineDistance} />
        </label>
        <label>
          Hole Nine Par:
          <input type='text' name='holeNinePar' onChange={handleInputChange} value={newScoreCard.holeNinePar} />
        </label>
        <label>
          Hole Nine Score:
          <input type='text' name='holeNineScore' onChange={handleInputChange} value={newScoreCard.holeNineScore} />
        </label>
        <label>
          Hole Ten Distance:
          <input type='text' name='holeTenDistance' onChange={handleInputChange} value={newScoreCard.holeTenDistance} />
        </label>
        <label>
          Hole Ten Par:
          <input type='text' name='holeTenPar' onChange={handleInputChange} value={newScoreCard.holeTenPar} />
        </label>
        <label>
          Hole Ten Score:
          <input type='text' name='holeTenScore' onChange={handleInputChange} value={newScoreCard.holeTenScore} />
        </label>
        <label>
          Hole Eleven Distance:
          <input type='text' name='holeElevenDistance' onChange={handleInputChange} value={newScoreCard.holeElevenDistance} />
        </label>
        <label>
          Hole Eleven Par:
          <input type='text' name='holeElevenPar' onChange={handleInputChange} value={newScoreCard.holeElevenPar} />
        </label>
        <label>
          Hole Eleven Score:
          <input type='text' name='holeElevenScore' onChange={handleInputChange} value={newScoreCard.holeElevenScore} />
        </label>
        <label>
          Hole Twelve Distance:
          <input type='text' name='holeTwelveDistance' onChange={handleInputChange} value={newScoreCard.holeTwelveDistance} />
        </label>
        <label>
          Hole Twelve Par:
          <input type='text' name='holeTwelvePar' onChange={handleInputChange} value={newScoreCard.holeTwelvePar} />
        </label>
        <label>
          Hole Twelve Score:
          <input type='text' name='holeTwelveScore' onChange={handleInputChange} value={newScoreCard.holeTwelveScore} />
        </label>
        <label>
          Hole Thirteen Distance:
          <input type='text' name='holeThirteenDistance' onChange={handleInputChange} value={newScoreCard.holeThirteenDistance} />
        </label>
        <label>
          Hole Thirteen Par:
          <input type='text' name='holeThirteenPar' onChange={handleInputChange} value={newScoreCard.holeThirteenPar} />
        </label>
        <label>
          Hole Thirteen Score:
          <input type='text' name='holeThirteenScore' onChange={handleInputChange} value={newScoreCard.holeThirteenScore} />
        </label>
        <label>
          Hole Fourteen Distance:
          <input type='text' name='holeFourteenDistance' onChange={handleInputChange} value={newScoreCard.holeFourteenDistance} />
        </label>
        <label>
          Hole Fourteen Par:
          <input type='text' name='holeFourteenPar' onChange={handleInputChange} value={newScoreCard.holeFourteenPar} />
        </label>
        <label>
          Hole Fourteen Score:
          <input type='text' name='holeFourteenScore' onChange={handleInputChange} value={newScoreCard.holeFourteenScore} />
        </label>
        <label>
          Hole Fifteen Distance:
          <input type='text' name='holeFifteenDistance' onChange={handleInputChange} value={newScoreCard.holeFifteenDistance} />
        </label>
        <label>
          Hole Fifteen Par:
          <input type='text' name='holeFifteenPar' onChange={handleInputChange} value={newScoreCard.holeFifteenPar} />
        </label>
        <label>
          Hole Fifteen Score:
          <input type='text' name='holeFifteenScore' onChange={handleInputChange} value={newScoreCard.holeFifteenScore} />
        </label>
        <label>
          Hole Sixteen Distance:
          <input type='text' name='holeSixteenDistance' onChange={handleInputChange} value={newScoreCard.holeSixteenDistance} />
        </label>
        <label>
          Hole Sixteen Par:
          <input type='text' name='holeSixteenPar' onChange={handleInputChange} value={newScoreCard.holeSixteenPar} />
        </label>
        <label>
          Hole Sixteen Score:
          <input type='text' name='holeSixteenScore' onChange={handleInputChange} value={newScoreCard.holeSixteenScore} />
        </label>
        <label>
          Hole Seventeen Distance:
          <input type='text' name='holeSeventeenDistance' onChange={handleInputChange} value={newScoreCard.holeSeventeenDistance} />
        </label>
        <label>
          Hole Seventeen Par:
          <input type='text' name='holeSeventeenPar' onChange={handleInputChange} value={newScoreCard.holeSeventeenPar} />
        </label>
        <label>
          Hole Seventeen Score:
          <input type='text' name='holeSeventeenScore' onChange={handleInputChange} value={newScoreCard.holeSeventeenScore} />
        </label>
        <label>
          Hole Eighteen Distance:
          <input type='text' name='holeEighteenDistance' onChange={handleInputChange} value={newScoreCard.holeEighteenDistance} />
        </label>
        <label>
          Hole Eighteen Par:
          <input type='text' name='holeEighteenPar' onChange={handleInputChange} value={newScoreCard.holeEighteenPar} />
        </label>
        <label>
          Hole Eighteen Score:
          <input type='text' name='holeEighteenScore' onChange={handleInputChange} value={newScoreCard.holeEighteenScore} />
        </label>

        <div className='button'>
          <input className="button" type="submit" value="Submit" />
        </div>

      </form>
    </div>
  )
}

export default NewScoreCardForm
