const envVars = require("../config/db.config.js");

const Sequelize = require("sequelize");

const connector = new Sequelize(envVars.name, envVars.user, envVars.password, {
  host: envVars.host,
  dialect: envVars.dialect,
});

const authenticate = async (connector) => {
  try {
    await connector.authenticate();
    console.log(`Connection to db was good`);
  } catch (e) {
    console.error(`Something went wrong when connnecting to db: ${e}`);
  }
};

authenticate(connector);

const db = {};

db.Sequelize = Sequelize;
db.connector = connector;

db.oneliner = require("./oneliner.model")(Sequelize, connector);

module.exports = db;
