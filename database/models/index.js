//const envVars = require("../config/db.config.js");

var path = require("path");
var env = process.env.NODE_ENV || "development";
var config = require(__dirname + "/../config/db.config.js")[env];

const Sequelize = require("sequelize");

// const connector = new Sequelize(envVars.name, envVars.user, envVars.password, {
//   host: envVars.host,
//   dialect: envVars.dialect,
// });
if (config.use_env_variable) {
  var connector = new Sequelize(process.env[config.use_env_variable], config);
} else {
  console.log("here I am ");
  var connector = new Sequelize(config.database, config.user, config.password, {
    host: config.host,
    dialect: config.dialect,
  });
  console.log(connector);
}

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
