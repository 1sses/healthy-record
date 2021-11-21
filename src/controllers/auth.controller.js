const { UserRepository } = require('../repository/user.repository')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

class AuthController {
  static async validation (ctx) {
    const { userId } = ctx.request
    const user = await UserRepository.searchUserById(userId)
    ctx.body = { login: user.login }
  }

  static async registration (ctx) {
    const { login, password } = ctx.request.body
    const loginCheck = await UserRepository.isAvailableLogin(login)
    if (loginCheck) {
      const passwordHash = bcrypt.hashSync(password, 10)
      await UserRepository.register(login, passwordHash)
    } else {
      throw Error('Данный логин не доступен!')
    }
    ctx.body = { message: 'Успешная регистрация!', login }
  }

  static async login (ctx) {
    const { login, password } = ctx.request.body
    const user = await UserRepository.searchUserByLogin(login)
    const allowedAccess = user && bcrypt.compareSync(password, user.password)
    if (allowedAccess) {
      const dataForToken = { userId: user.id }
      const token = jwt.sign(dataForToken, 'cf8f281b-38a1-482d-8981-80a2f8276b1e', { expiresIn: '30d' })
      ctx.cookies.set('jwt', token,
        { httpOnly: false, expires: new Date(Date.now() + 30 * 24 * 3600 * 1000) })
    } else {
      throw Error('Неверный логин или пароль!')
    }
    ctx.body = { message: 'Вход выполнен успешно!', login }
  }

  static async logout (ctx) {
    ctx.cookies.set('jwt', '')
    ctx.body = { message: 'Выход выполнен успешно!' }
  }
}

module.exports = AuthController
