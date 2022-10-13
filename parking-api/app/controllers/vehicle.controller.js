const { reset } = require("nodemon");
const db = require("../models");
const Vehicle = db.vehicle;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if (!req.body.placa) {
        res.status(400).send({
            message: "Body can't be empty"
        });
        return;
    }

    const vehicle = {
        license_plate: req.body.license_plate,
        color: req.body.cor,
        client_id: req.body.client_id,
        model_id: req.body.model_id
    }

    Vehicle.create(vehicle).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Error trying to create vehicle"
        });
    });

};

exports.findAll = (req, res) => {
    const license_plate = req.query.license_plate;
    var condition = license_plate ? { license_plate: { [Op.like]: `%${license_plate}%` } } : null

    Vehicle.findAll({ where: condition }).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Error trying to get vehicles"
        })
    })

};

exports.findOne = (req, res) => {
    const id =  req.params.id;

    Vehicle.findByPk(id).then(data => {
        if (data) {
            res.send(data);
        } else {
            res.status(404).send({
                message: `System failure trying to get vehicle with id = ${id}`
            });
        }
    }).catch(err => {
        res.status(500).send({
            message: "Error trying to get vehicle with id = " + id
        });
    });
};

exports.update = (req, res) => {
    const id = req.params.id;

    Vehicle.update(req.body, {
        where: { id: id }
    }).then(num => {
        if (num == 1) {
            res.send({
                message: "Vehicle updated succesfully"
            });
        } else {
            res.send({
                message: `System failure trying to update vehicle with id = ${id}`
            })
        }
    }).catch(err => {
        res.status(500).send({
            message: "Error trying to update vehicle with id = " + id
        });
    });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Vehicle.destroy({
        where: { id: id }
    }).then(num => {
        if (num == 1) {
            res.send({
                message: "Vehicle deleted succesfully"
            });
        } else {
            res.send({
                message: `System failure trying to delete vehicle with id = ${id}`
            })
        }
    }).catch(err => {
        res.status(500).send({
            message: "Error trying to delete vehicle with id = " + id
        });
    });

};

