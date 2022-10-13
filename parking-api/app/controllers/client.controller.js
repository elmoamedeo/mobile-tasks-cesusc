const db = require("../models");
const Client = db.client;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if (!req.body.nome) {
        res.status(400).send({
            message: "Body can't be empty"
        });
        return;
    }

    const client = {
        name: req.body.name,
        cpf: req.body.cpf
    }

    Client.create(client).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Error trying to create client"
        });
    });

};

exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { [Op.like]: `%${name}%` } } : null

    Client.findAll({ where: condition }).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Error trying to get clients"
        })
    })

};

exports.findOne = (req, res) => {
    const id = req.params.id;

    Client.findByPk(id).then(data => {
        if (data) {
            res.send(data);
        } else {
            res.status(404).send({
                message: `Client with id = ${id} not found.`
            });
        }
    }).catch(err => {
        res.status(500).send({
            message: "Error trying to get client with id = " + id
        });
    });
};

exports.update = (req, res) => {
    const id = req.params.id;

    Client.update(req.body, {
        where: { id: id }
    }).then(num => {
        if (num == 1) {
            res.send({
                message: "Client succesfully updated"
            });
        } else {
            res.send({
                message: `System failure on trying to update client with id = ${id}`
            })
        }
    }).catch(err => {
        res.status(500).send({
            message: "Error trying to update client with id =" + id
        });
    });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Client.destroy({
        where: { id: id }
    }).then(num => {
        if (num == 1) {
            res.send({
                message: "Client was deleted succesfully"
            });
        } else {
            res.send({
                message: `System failure trying to delete client with id = ${id}`
            })
        }
    }).catch(err => {
        res.status(500).send({
            message: "Error trying to delete client with id = " + id
        });
    });

};

