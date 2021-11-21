const { UserRepository } = require('../repository/user.repository')

class DataController {
  static async synchronize (ctx) {
    const { userId } = ctx.request
    const { bodyData, proportions, otherData } = ctx.request.body
    await UserRepository.synchronize(userId, bodyData, proportions, otherData)
    ctx.body = { message: 'Успешно!' }
  }
}

module.exports = DataController
