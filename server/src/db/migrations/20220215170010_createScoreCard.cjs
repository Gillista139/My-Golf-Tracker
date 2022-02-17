/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return (
    knex.schema.createTable('scoreCards', (table) => {
      table.bigIncrements('id').primary()
      table.string('dateOfRound').notNullable()
      table.string('teeColor')
      table.integer('holeOneDistance')
      table.integer('holeOnePar')
      table.integer('holeOneScore')
      table.integer('holeTwoDistance')
      table.integer('holeTwoPar')
      table.integer('holeTwoScore')
      table.integer('holeThreeDistance')
      table.integer('holeThreePar')
      table.integer('holeThreeScore')
      table.integer('holeFourDistance')
      table.integer('holeFourPar')
      table.integer('holeFourScore')
      table.integer('holeFiveDistance')
      table.integer('holeFivePar')
      table.integer('holeFiveScore')
      table.integer('holeSixDistance')
      table.integer('holeSixPar')
      table.integer('holeSixScore')
      table.integer('holeSevenDistance')
      table.integer('holeSevenPar')
      table.integer('holeSevenScore')
      table.integer('holeEightDistance')
      table.integer('holeEightPar')
      table.integer('holeEightScore')
      table.integer('holeNineDistance')
      table.integer('holeNinePar')
      table.integer('holeNineScore')
      table.integer('holeTenDistance')
      table.integer('holeTenPar')
      table.integer('holeTenScore')
      table.integer('holeElevenDistance')
      table.integer('holeElevenPar')
      table.integer('holeElevenScore')
      table.integer('holeTwelveDistance')
      table.integer('holeTwelvePar')
      table.integer('holeTwelveScore')
      table.integer('holeThirteenDistance')
      table.integer('holeThirteenPar')
      table.integer('holeThirteenScore')
      table.integer('holeFourteenDistance')
      table.integer('holeFourteenPar')
      table.integer('holeFourteenScore')
      table.integer('holeFifteenDistance')
      table.integer('holeFifteenPar')
      table.integer('holeFifteenScore')
      table.integer('holeSixteenDistance')
      table.integer('holeSixteenPar')
      table.integer('holeSixteenScore')
      table.integer('holeSeventeenDistance')
      table.integer('holeSeventeenPar')
      table.integer('holeSeventeenScore')
      table.integer('holeEighteenDistance')
      table.integer('holeEighteenPar')
      table.integer('holeEighteenScore')
      table.bigInteger('courseId').unsigned().notNullable().index().references('courses.id')
      table.bigInteger('userId').unsigned().notNullable().index().references('users.id')

      table.timestamp("createdAt").notNullable().defaultTo(knex.fn.now())
      table.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now())
    })
  )
}

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
  return (
    knex.schema.dropTableIfExists('scoreCards')
  )
}
