module.exports = (sequelize, Sequelize) => {
  const Story = sequelize.define('story', {
    type: {
      type: Sequelize.ENUM('chapter', 'tale', 'novel'),
      allowNull: false
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false
    },
    text: Sequelize.TEXT
  })
  return Story
}