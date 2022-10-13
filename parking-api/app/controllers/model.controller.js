const db = require("../models");
const Model = db.model;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if (!req.body.name) {
        res.status(400).send({
            message: "Body can't be empty"
        });
        return;
    }

    const model = {
        name: req.body.nome,
    }

    Model.create(model).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Error trying to create model"
        });
    });

};

exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { [Op.like]: `%${name}%` } } : null

    Model.findAll({ where: condition }).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Error trying to get models"
        })
    })

};

exports.findOne = (req, res) => {
    const id = req.params.id;

    Model.findByPk(id).then(data => {
        if (data) {
            res.send(data);
        } else {
            res.status(404).send({
                message: `Model with id = ${id} not found`
            });
        }
    }).catch(err => {
        res.status(500).send({
            message: "Error trying to get model with id = " + id
        });
    });
};

exports.update = (req, res) => {
    const id = req.params.id;

    Model.update(req.body, {
        where: { id: id }
    }).then(num => {
        if (num == 1) {
            res.send({
                message: "Model was updated succesfully"
            });
        } else {
            res.send({
                message: `System failure trying to update model with id = ${id}`
            })
        }
    }).catch(err => {
        res.status(500).send({
            message: "Error trying to update model with id = " + id
        });
    });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Model.destroy({
        where: { id: id }
    }).then(num => {
        if (num == 1) {
            res.send({
                message: "Model was deleted succesfully"
            });
        } else {
            res.send({
                message: `System failure trying to delete model with id = ${id}`
            })
        }
    }).catch(err => {
        res.status(500).send({
            message: "Error trying to delete model with id = " + id
        });
    });

};

