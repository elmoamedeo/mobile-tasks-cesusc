const { sequelize, Sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
    const Parking = sequelize.define("Parking", {
        entrancy: {
            type: Sequelize.DATE
        },
        exit: {
            type: Sequelize.DATE
        },
        value: {
            type: Sequelize.DECIMAL
        },
        vehicle_id: {
            type: Sequelize.INTEGER,
            references: {
                model: 'Vehicles',
                key: 'id'
            }
        },
        slot_id: {
            type: Sequelize.INTEGER,
            references: {
                model: 'Slots',
                key: 'id'
            }
        }
    }, {
        indexes: [
            {
                unique: false,
                primary: false,
                fields: ['vehicle_id']
            },
            {
                unique: false,
                primary: false,
                fields: ['slot_id']
            }
        ]
    });
    return Parking;
}