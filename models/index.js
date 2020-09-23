const dbConfig = require('../config/db.config')
const Sequelize = require('sequelize')

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: dbConfig.Aliases,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.users = require('./user.model')(sequelize, Sequelize)
db.stories = require('./story.model')(sequelize, Sequelize)
db.users_stories = require('./user_story.model')(sequelize, Sequelize)
db.comments = require('./commentary.model')(sequelize, Sequelize)
db.media_urls = require('./media_url.model')(sequelize, Sequelize)
db.categories = require('./category.model')(sequelize, Sequelize)
db.tags = require('./tag.model')(sequelize, Sequelize)


// Many to Many relation between Users & Stories
db.users.belongsToMany(db.stories, {
  through: db.users_stories
})
db.stories.belongsToMany(db.users, {
  through: db.users_stories
})

// One to Many relations between Comments & a User & a Story
db.users.hasMany(db.comments)
db.comments.belongsTo(db.users)

db.stories.hasMany(db.comments)
db.comments.belongsTo(db.stories)

// Many to Many relation between Media_urls & Stories
db.stories.belongsToMany(db.media_urls, {through: 'media_urls_stories'})
db.media_urls.belongsToMany(db.stories, {through: 'media_urls_stories'})

// Many to Many relation between Stories & Categories
db.stories.belongsToMany(db.categories, {through: 'stories_categories'})
db.categories.belongsToMany(db.stories, {through: 'stories_categories'})

// Many to Many relation between Stories & Tags
db.stories.belongsToMany(db.tags, {through: 'stories_tags'})
db.tags.belongsToMany(db.stories, {through: 'stories_tags'})

module.exports = db

// Testing area
let data = []

const miFunc = async () => {
  await db.users.findAll().then(d => data.push(d[0]))
  await db.stories.findAll().then(d => data.push(d[0]))
}

miFunc().then(() => console.log(data))

/* miFunc().then(async () => {
  await db.users_stories.create({
    userId: data[0].dataValues.id,
    storyId: data[1].dataValues.id
  })
}) */

// miFunc().then(() => data[0].destroy())