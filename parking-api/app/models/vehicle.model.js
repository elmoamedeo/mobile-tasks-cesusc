const { sequelize, Sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
    const Vehicle = sequelize.define("Vehicle", {
        license_plate: {
            type: Sequelize.STRING(45)
        },
        color: {
            type: Sequelize.STRING(45)
        },
        client_id: {
            type: Sequelize.INTEGER,
            references: {
                model: 'Clients',
                key: 'id'
            }
        },
        model_id: {
            type: Sequelize.INTEGER,
            references: {
                model: 'Models',
                key: 'id'
            }
        }
    }, {
        indexes: [
            {
                unique: false,
                primary: false,
                fields: ['client_id']
            },
            {
                unique: false,
                primary: false,
                fields: ['model_id']
            },
            {
                unique: true,
                fields: ['license_plate']
            }
        ]
    });
    return Vehicle;
}