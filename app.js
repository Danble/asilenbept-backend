const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const db = require('./models')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

const PORT = process.env.PORT || 8080
require('./controller/user.controller')(app)
require('./controller/story.controller')(app)
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

//db.sequelize.sync({force: true, alter: true})
db.sequelize.sync()