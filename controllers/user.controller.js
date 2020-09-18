const db = require('../models')
const User = db.users
const Op = db.Sequelize.Op

exports.create = (req, res) => {
  if (!req.body.first_name) {
    res.status(400).send({
      message: "Content cannot be empty!"
    })
    return
  }

  const user = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email
  }

  User.create(user)
  .then(data => {
    res.send(data)
  })
  .catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred while creating the User"
    })
  })
}

exports.findAll = (req, res) => {
  
}

// Find a single User with an id
exports.findOne = (req, res) => {
  
}

// Update a User by the id in the request
exports.update = (req, res) => {
  
}

// Delete a User with the specified id in the request
exports.delete = (req, res) => {
  
}

// Delete all Users from the database.
exports.deleteAll = (req, res) => {
  
}

// Find all published Users
exports.findAllPublished = (req, res) => {
  
}