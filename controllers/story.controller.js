const db = require('../models')
const Story = db.stories
const Op = db.Sequelize.Op

exports.create = (req, res) => {
  if (!req.body.type || !req.body.title) {
    res.status(400).send({
      message: "Mandatory fields can't be empty!"
    })
    return
  }

  const story = {
    type: req.body.type,
    title: req.body.title,
    text: req.body.text
  }

  Story.create(story)
  .then(data => {
    res.send(data)
  })
  .catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred while creating the Story"
    })
  })
}