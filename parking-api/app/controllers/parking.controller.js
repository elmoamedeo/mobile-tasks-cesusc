const db = require("../models");
const Parking = db.parking;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if (!req.body.entrancy) {
        res.status(400).send({
            message: "Body can't be empty"
        });
        return;
    }

    const parking = {
        entrancy: req.body.entrancy,
        exit: req.body.exit,
        value: req.body.value,
        slot_id: req.body.slot_id
    }

    Parking.create(parking).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Error trying to create parking"
        });
    });

};

exports.findAll = (req, res) => {
    const entrancy = req.query.entrancy;
    var condition = entrancy ? { entrancy: { [Op.like]: `%${entrancy}%` } } : null

    Parking.findAll({ where: condition }).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Error trying to get parking"
        })
    })

};

exports.findOne = (req, res) => {
    const id = req.params.id;

    Parking.findByPk(id).then(data => {
        if (data) {
            res.send(data);
        } else {
            res.status(404).send({
                message: `Parking with id = ${id} not found`
            });
        }
    }).catch(err => {
        res.status(500).send({
            message: "Error trying to get parking with id = " + id
        });
    });
};

exports.update = (req, res) => {
    const id = req.params.id;

    Parking.update(req.body, {
        where: { id: id }
    }).then(num => {
        if (num == 1) {
            res.send({
                message: "Parking updated succesfully"
            });
        } else {
            res.send({
                message: `System failure trying to update parking with id = ${id}`
            })
        }
    }).catch(err => {
        res.status(500).send({
            message: "Error trying to update parking with id = " + id
        });
    });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Parking.destroy({
        where: { id: id }
    }).then(num => {
        if (num == 1) {
            res.send({
                message: "Parking deleted succesfully"
            });
        } else {
            res.send({
                message: `System failure trying to update parking with id = ${id}`
            })
        }
    }).catch(err => {
        res.status(500).send({
            message: "Error trying to delete parking with id = " + id
        });
    });

};

