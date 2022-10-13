const db = require("../models");
const User = db.user;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if (!req.body.name) {
        res.status(400).send({
            message: "Body can't be empty"
        });
        return;
    }

    const user = {
        name: req.body.name,
        login: req.body.login,
        password: req.body.password
    }

    User.create(user).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Error trying to create user"
        });
    });

};

exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { [Op.like]: `%${name}%` } } : null

    User.findAll({ where: condition }).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Error trying to get users"
        })
    })

};

exports.findOne = (req, res) => {
    const id = req.params.id;

    User.findByPk(id).then(data => {
        if (data) {
            res.send(data);
        } else {
            res.status(404).send({
                message: `System failure trying to get user with id = ${id}`
            });
        }
    }).catch(err => {
        res.status(500).send({
            message: "Error trying to get user with id = " + id
        });
    });
};

exports.update = (req, res) => {
    const id = req.params.id;

    User.update(req.body, {
        where: { id: id }
    }).then(num => {
        if (num == 1) {
            res.send({
                message: "User updated succesfully"
            });
        } else {
            res.send({
                message: `System failure trying to update user with id = ${id}`
            })
        }
    }).catch(err => {
        res.status(500).send({
            message: "Error trying to update user with id = " + id
        });
    });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    User.destroy({
        where: { id: id }
    }).then(num => {
        if (num == 1) {
            res.send({
                message: "User deleted succesfully"
            });
        } else {
            res.send({
                message: `System failure trying to delete user with id = ${id}`
            })
        }
    }).catch(err => {
        res.status(500).send({
            message: "Error trying to delete user with id = " + id
        });
    });

};

