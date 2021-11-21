const { User } = require('./models')

class UserRepository {
  static async register (login, password) {
    return await User.create({
      login,
      password
    })
  }

  static async isAvailableLogin (login) {
    const result = await User.findOne({ where: { login } })
    return !result
  }

  static async searchUserByLogin (login) {
    const result = await User.findOne({ where: { login } })
    return result?.dataValues
  }

  static async searchUserById (id) {
    const result = await User.findOne({ where: { id } })
    return result?.dataValues
  }

  static async synchronize (id, bodyData, proportions, otherData) {
    return await User.update({ bodyData, proportions, otherData }, { where: { id } })
  }

  static async reset (id) {
    return await User.update({
      bodyData: JSON.stringify({}),
      proportions: JSON.stringify({}),
      otherData: JSON.stringify({ sex: 'М', height: 0, age: 0 })
    },
    { where: { id } })
  }
}

module.exports = {
  UserRepository
}
