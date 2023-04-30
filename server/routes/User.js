const { loginSchema, registrationSchema } = require('../controller/schema/User')
const { loginUserHandler, registrationUserHandler } = require('../controller/handler/User')

module.exports = (fastify, option, done) => {
    fastify.post('/login', {
        schema: loginSchema,
        handler: loginUserHandler,
    })
    fastify.post('/register', {
        schema: registrationSchema,
        handler: registrationUserHandler
    })

    done();
}
