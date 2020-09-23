module.exports = (sequelize, Sequelize) => {
  const Tag = sequelize.define('tag', {
    title: {
      type: Sequelize.STRING(50),
      allowNull: false
    }
  })
  return Tag
}