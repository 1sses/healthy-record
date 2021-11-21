const Router = require('koa-router')
const { tokenValidation } = require('./middlewares/token.validation.middleware')
const AuthController = require('./controllers/auth.controller')
const DataController = require('./controllers/data.controller')

const router = new Router({ prefix: '/api' })

router.get('/validate', tokenValidation, AuthController.validation)
router.post('/registration', AuthController.registration)
router.post('/login', AuthController.login)
router.post('/logout', AuthController.logout)

router.post('/sync', tokenValidation, DataController.synchronize)
router.get('/reset', tokenValidation, DataController.reset)

module.exports = router
