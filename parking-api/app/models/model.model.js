const { sequelize, Sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
    const Model = sequelize.define("Model", {
        name: {
            type: Sequelize.STRING(45)
        }
    });
    return Model;
}