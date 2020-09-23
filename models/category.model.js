module.exports = (sequelize, Sequelize) => {
  const Category = sequelize.define('category', {
    title: {
      type: Sequelize.STRING(50),
      allowNull: false
    }
  })
  return Category
}