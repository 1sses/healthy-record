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
}

module.exports = {
  UserRepository
}
