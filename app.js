const express = require('express')
const bodyParser = require('body-parser')
const db = require('./models')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

const PORT = process.env.PORT || 8080
require('./routes/user.routes')(app)
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

db.sequelize.sync()