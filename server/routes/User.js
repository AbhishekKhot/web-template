const {
    loginSchema,
    registrationSchema,
    forgotPasswordSchema,
    resetPasswordsSchema,
} = require('../controller/schema/User')
const {
    loginUserHandler,
    registrationUserHandler,
    forgotPasswordHandler,
    resetPasswordHandler
} = require('../controller/handler/User')

module.exports = (fastify, option, done) => {
    fastify.post('/login', {
        schema: loginSchema,
        handler: loginUserHandler,
    })
    fastify.post('/register', {
        schema: registrationSchema,
        handler: registrationUserHandler
    })
    fastify.post('/forgotpassword', {
        schema: forgotPasswordSchema,
        handler: forgotPasswordHandler
    })
    fastify.post('/resetpassword/:id', {
        schema: resetPasswordsSchema,
        handler: resetPasswordHandler
    })
    done();
}
