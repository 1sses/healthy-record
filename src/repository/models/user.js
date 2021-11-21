const {
  Model
} = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate () { }
  }

  const attributes = {
    login: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    bodyData: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: JSON.stringify({})
    },
    proportions: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: JSON.stringify({})
    },
    otherData: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: JSON.stringify({ sex: 'М', height: 0, age: 0 })
    }
  }
  const options = {
    sequelize,
    modelName: 'User'
  }
  User.init(attributes, options)

  return User
}
