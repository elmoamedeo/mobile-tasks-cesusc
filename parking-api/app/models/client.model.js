const { sequelize, Sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
    const Client = sequelize.define("Client", {
        name: {
            type: Sequelize.STRING(45)
        },
        cpf: {
            type: Sequelize.STRING(45)
        }
    }, {
        indexes: [
            {
                unique: true,
                fields: ['cpf']
            }
        ]
    });
    return Client;
}