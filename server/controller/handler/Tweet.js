const tweetService = require('../../service/Tweet')

async function tweetHandler(request, reply) {
    return await tweetService.createTweet(request, reply)
}

async function getSingleTweetHandler(request, reply) {
    return await tweetService.getSingleUserTweet(request, reply)
}

module.exports = { tweetHandler, getSingleTweetHandler }