const { UserRealtionHandler } = require('../controller/handler/User_relation')
const { UserRelationSchema } = require('../controller/schema/User_relation')

module.exports = (fastify, options, done) => {
    fastify.post('/relation', {
        schema: UserRelationSchema,
        handler: UserRealtionHandler
    })
    done()
}