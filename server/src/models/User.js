/* eslint-disable import/no-extraneous-dependencies */
const Bcrypt = require("bcrypt");
const unique = require("objection-unique");
const Model = require("./Model");

const saltRounds = 10;

const uniqueFunc = unique({
  fields: ["email"],
  identifiers: ["id"],
});

class User extends uniqueFunc(Model) {
  static get tableName() {
    return "users";
  }

  set password(newPassword) {
    this.cryptedPassword = Bcrypt.hashSync(newPassword, saltRounds);
  }

  authenticate(password) {
    return Bcrypt.compareSync(password, this.cryptedPassword);
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["email", 'name'],

      properties: {
        email: { type: "string", format: "email" },
        cryptedPassword: { type: "string" },
        name: { type: 'string' }
      },
    };
  }

  $formatJson(json) {
    const serializedJson = super.$formatJson(json);

    if (serializedJson.cryptedPassword) {
      delete serializedJson.cryptedPassword;
    }

    return serializedJson;
  }

  static get relationMappings() {
    const ScoreCard = require('./ScoreCard')

    return {
      scoreCards: {
        relation: Model.HasManyRelation,
        modelClass: ScoreCard,
        join: {
          from: 'users.id',
          to: 'scoreCards.userId'
        }
      },
    }
  }
}

module.exports = User;
