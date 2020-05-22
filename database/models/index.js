let env = process.env.NODE_ENV || "development";
let config = require(__dirname + "/../config/db.config.js")[env];

require("dotenv").config();

const Sequelize = require("sequelize");
if (config.use_env_variable) {
  var connector = new Sequelize(process.env[config.use_env_variable], config);
} else {
  console.log("this is the connector");
  var connector = new Sequelize("one_liners", "root", "5973", {
    host: "localhost",
    dialect: "mysql",
  });
}
// if (process.env.NODE_ENV === "production") {
//   connector = new Sequelize(envVars.name, envVars.user, envVars.password, {
//     host: envVars.host,
//     dialect: envVars.dialect,
//   });
// } else {
//   connector = new Sequelize(envVars.name, envVars.user, envVars.password, {
//     host: envVars.host,
//     dialect: envVars.dialect,
//   });
// }

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
