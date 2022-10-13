const { sequelize, Sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("User", {
        name: {
            type: Sequelize.STRING(45)
        },
        login: {
            type: Sequelize.STRING(45)
        },
        password: {
            type: Sequelize.STRING(45)
        }
    }, {
        indexes: [
            {
                unique: true,
                fields: ['login']
            }
        ]
    });
    return User;
}