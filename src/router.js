const Router = require('koa-router')
const { tokenValidation } = require('./middlewares/token.validation.middleware')
const AuthController = require('./controllers/auth.controller')

const router = new Router({ prefix: '/api' })

router.get('/validate', tokenValidation, AuthController.validation)
router.post('/registration', AuthController.registration)
router.post('/login', AuthController.login)
router.post('/logout', AuthController.logout)
//
// router.put('/api/change-name', tokenValidation, UserSettingsController.changeName)
// router.put('/api/change-avatar', tokenValidation, upload.single('avatar'), UserSettingsController.changeAvatar)
// router.put('/api/change-email', tokenValidation, emailValidation, UserSettingsController.changeEmail)
// router.put('/api/change-password', tokenValidation, passwordValidation, UserSettingsController.changePassword)
// router.get('/api/personal-data', tokenValidation, UserSettingsController.getPersonalData)

module.exports = router
