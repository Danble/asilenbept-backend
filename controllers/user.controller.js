const db = require('../models')
const User = db.users
const Op = db.Sequelize.Op

exports.create = (req, res) => {
  if (!req.body.name || !req.body.nickname || !req.body.email || !req.body.password || !req.body.user_type) {
    res.status(400).send({
      message: "Mandatory fields can't be empty!"
    })
    return
  }

  const user = {
    name: req.body.name,
    nickname: req.body.nickname,
    email: req.body.email,
    password: req.body.password,
    user_type: req.body.user_type,
    age: req.body.age,
    description: req.body.description
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