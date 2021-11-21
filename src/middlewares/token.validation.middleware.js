const jwt = require('jsonwebtoken')

const parseToken = (token) => {
  if (token) {
    try {
      return jwt.verify(token, 'cf8f281b-38a1-482d-8981-80a2f8276b1e')
    } catch (err) {
      return null
    }
  }
  return null
}

async function tokenValidationMiddleware (ctx, next) {
  const token = ctx.cookies.get('jwt')
  if (token) {
    const { userId } = parseToken(token)
    ctx.request.userId = userId
    await next()
  } else {
    ctx.body = { error: 'Invalid token' }
  }
}

module.exports = { tokenValidation: tokenValidationMiddleware }
