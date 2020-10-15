const db = require('../models')
const Story = db.stories
const Op = db.Sequelize.Op

exports.createStory = (req, res) => {
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

//TODO It might be useful but we aren't using this right now.
exports.findAllStories = (req, res) => {
  console.log(`aquí va la query ${req.query.id}`)
  Story.findAll({ where: { id: 1 } })
  .then(data => {
    res.send(data)
  })
  .catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred while creating the User"
    })
  })
}