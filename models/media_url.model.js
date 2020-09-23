module.exports = (sequelize, Sequelize) => {
  const MediaUrl = sequelize.define('media_url', {
    title: Sequelize.STRING(100),
    author: {
      type: Sequelize.STRING(200),
      allowNull: false
    },
    type: {
      type: Sequelize.ENUM('audio', 'image', 'icon', 'GIF'),
      allowNull: false
    },
    url: {
      type: Sequelize.STRING,
      allowNull: false
    }
  })
  return MediaUrl
}