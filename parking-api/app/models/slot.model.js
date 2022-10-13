const { sequelize, Sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
    const Slot = sequelize.define("Slot", {
        value: {
            type: Sequelize.DECIMAL(10,2)
        },
        type: {
            type: Sequelize.INTEGER
        },

    });
    return Slot;
}