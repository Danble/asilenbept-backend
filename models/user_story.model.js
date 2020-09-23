const User = require('./user.model')
const Story = require('./story.model')

module.exports = (sequelize, Sequelize) => {
  const UserStory = sequelize.define('user_story', {
    userId: {
      type: Sequelize.INTEGER,
      references: {
        model: User,
        key: 'id'
      }
    },
    storyId: {
      type: Sequelize.INTEGER,
      references: {
        model: Story,
        key: 'id'
      }
    }
  })
  return UserStory
}