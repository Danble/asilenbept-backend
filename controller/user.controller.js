module.exports = app => {
  const {create, findOne} = require('../service/user.service')

  let router = require('express').Router()

  app.use('/users', router)

  router.post('/post', create)
  router.get('/get', findOne)
}