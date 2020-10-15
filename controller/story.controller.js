module.exports = app => {
  const {createStory, findAllStories} = require('../service/story.service')
  
  let router = require('express').Router()

  app.use('/stories', router)

  router.get('/getall', findAllStories)
}