const db = require("../models");
const Slot = db.slot;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if (!req.body.value) {
        res.status(400).send({
            message: "Body can't be empty"
        });
        return;
    }

    const slot = {
        value: req.body.value,
        type: req.body.type
    }

    Slot.create(slot).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Error trying to create slot"
        })
    })


};

exports.findAll = (req, res) => {
    const value = req.query.valor;
    var condition = value ? { value: { [Op.like]: `%${value}%` } } : null

    Slot.findAll({ where: condition }).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Error trying to get slots"
        })
    })

};

exports.findOne = (req, res) => {
    const id = req.params.id;

    Slot.findByPk(id).then(data => {
        if (data) {
            res.send(data);
        } else {
            res.status(404).send({
                message: `System failure trying to get slot with id = ${id}.`
            });
        }
    }).catch(err => {
        res.status(500).send({
            message: "Error trying to get slot with id = " + id
        });
    });
};

exports.update = (req, res) => {
    const id = req.params.id;

    Slot.update(req.body, {
        where: { id: id }
    }).then(num => {
        if (num == 1) {
            res.send({
                message: "Slot updated succesfully"
            });
        } else {
            res.send({
                message: `System failure trying to update slot with id = ${id}`
            })
        }
    }).catch(err => {
        res.status(500).send({
            message: "Error trying to update slot with id = " + id
        });
    });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Slot.destroy({
        where: { id: id }
    }).then(num => {
        if (num == 1) {
            res.send({
                message: "Slot deleted succesfully"
            });
        } else {
            res.send({
                message: `System failure trying to delete slot with id = ${id}`
            })
        }
    }).catch(err => {
        res.status(500).send({
            message: "Error trying to delete slot with id = " + id
        });
    });

};