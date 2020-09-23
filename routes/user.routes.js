module.exports = app => {
  const users = require('../controllers/user.controller')
  const stories = require('../controllers/story.controller')

  let router = require('express').Router()

  app.use('/api', router)

  router.post('/user', users.create)
  router.post('/story', stories.create)

}