module.exports = (Sequelize, connector) => {
  const Oneliner = connector.define(
    "oneliner",
    {
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      data: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      upvote: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    },
    { freezeTableName: true }
  );

  return Oneliner;
};
