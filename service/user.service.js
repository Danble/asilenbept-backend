const db = require('../models')
const User = db.users
const Op = db.Sequelize.Op

exports.create = (req, res) => {
  if (!req.body.user.name || !req.body.user.nickname || !req.body.user.email || !req.body.user.password || !req.body.user.user_type) {
    res.status(400).send({
      message: "Mandatory fields can't be empty!"
    })
    return
  }

  const user = req.body.user 

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

// Find a single User with its nickname
exports.findOne = (req, res) => {
  if (!req.query.nickname || !req.query.password) {
    res.status(400).send({
      message: "Mandatory fields can't be empty!"
    })
    return
  }

  const user = req.query

  User.findOne({
    where: {
      nickname: user.nickname
    }
  })
  .then(data => {
    res.send(data)
  })
  .catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred while creating the User"
    })
  })
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