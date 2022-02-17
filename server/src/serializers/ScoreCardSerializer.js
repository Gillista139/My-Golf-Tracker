class ScoreCardSerializer {

  static getSummary(scoreCard) {
    const allowedAttributes = [
      'id',
      'userId',
      'dateOfRound',
      'teeColor',
      'holeOneDistance',
      'holeOnePar',
      'holeOneScore',
      'holeTwoDistance',
      'holeTwoPar',
      'holeTwoScore',
      'holeThreeDistance',
      'holeThreePar',
      'holeThreeScore',
      'holeFourDistance',
      'holeFourPar',
      'holeFourScore',
      'holeFiveDistance',
      'holeFivePar',
      'holeFiveScore',
      'holeSixDistance',
      'holeSixPar',
      'holeSixScore',
      'holeSevenDistance',
      'holeSevenPar',
      'holeSevenScore',
      'holeEightDistance',
      'holeEightPar',
      'holeEightScore',
      'holeNineDistance',
      'holeNinePar',
      'holeNineScore',
      'holeTenDistance',
      'holeTenPar',
      'holeTenScore',
      'holeElevenDistance',
      'holeElevenPar',
      'holeElevenScore',
      'holeTwelveDistance',
      'holeTwelvePar',
      'holeTwelveScore',
      'holeThirteenDistance',
      'holeThirteenPar',
      'holeThirteenScore',
      'holeFourteenDistance',
      'holeFourteenPar',
      'holeFourteenScore',
      'holeFifteenDistance',
      'holeFifteenPar',
      'holeFifteenScore',
      'holeSixteenDistance',
      'holeSixteenPar',
      'holeSixteenScore',
      'holeSeventeenDistance',
      'holeSeventeenPar',
      'holeSeventeenScore',
      'holeEighteenDistance',
      'holeEighteenPar',
      'holeEighteenScore',
    ]
    let serializedScoreCard = {}
    for (const attribute of allowedAttributes) {
      serializedScoreCard[attribute] = scoreCard[attribute]
    }
    return serializedScoreCard
  }
}

export default ScoreCardSerializer