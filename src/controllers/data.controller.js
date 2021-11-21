const { UserRepository } = require('../repository/user.repository')

class DataController {
  static async synchronize (ctx) {
    const { userId } = ctx.request
    const { bodyData, proportions, otherData } = ctx.request.body
    console.log(otherData)
    await UserRepository.synchronize(userId, bodyData, proportions, otherData)
    ctx.body = { message: 'Успешно!' }
  }

  static async reset (ctx) {
    const { userId } = ctx.request
    await UserRepository.reset(userId)
    ctx.body = { message: 'Данные сброшены успешно!' }
  }
}

module.exports = DataController
