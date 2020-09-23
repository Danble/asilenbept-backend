module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define('user', {
    name: {
      type: Sequelize.STRING(120),
      allowNull: false
    },
    nickname: {
      type: Sequelize.STRING(150),
      unique: true,
      allowNull: false,
      //TODO generate random and funny names as a defaultValue
    },
    email: {
      type: Sequelize.STRING(150),
      unique: true,
      allowNull: false
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    },
    user_type: {
      type: Sequelize.ENUM('professional', 'advanced', 'medium', 'amateur', 'noob'),
      allowNull: false
    },
    age: Sequelize.INTEGER,
    description: Sequelize.TEXT('tiny')
  })
  return User
}