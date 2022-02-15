/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  return (
    knex.schema.createTable('courses', (table) => {
      table.bigIncrements('id').primary()
      table.string('name').notNullable()
      table.integer('par').notNullable()
      table.integer('totalHoles').notNullable()
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
    knex.schema.dropTableIfExists('courses')
  )
}
