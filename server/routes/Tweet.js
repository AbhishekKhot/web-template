const { tweetSchema, getSingleTweetSchema } = require('../controller/schema/Tweet')
const { tweetHandler, getSingleTweetHandler } = require('../controller/handler/Tweet')

module.exports = (fastify, options, done) => {
    fastify.post('/tweet', {
        schema: tweetSchema,
        handler: tweetHandler
    })
    fastify.get('/tweet/:userId', {
        schema: getSingleTweetSchema,
        handler: getSingleTweetHandler
    })
    done()
}