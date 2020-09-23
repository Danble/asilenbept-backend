module.exports = (sequelize, Sequelize) => {
  const Commentary = sequelize.define('commentary', {
    content: {
      type: Sequelize.TEXT('tiny'),
      allowNull: false
    }
  })
  return Commentary
}