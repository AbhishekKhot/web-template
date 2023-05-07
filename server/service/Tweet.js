const { Tweet, Op } = require('../models')
const { NotFoundError } = require("../lib/serverErrors");

class TweetService {
    async createTweet(request, reply) {
        try {
            const tweet = await Tweet.create({
                ...request.body
            })
            reply.status(200).send(tweet)
        } catch (error) {
            reply.status(500).send({ msg: "Something went wrong" })
        }
    }

    async getSingleUserTweet(request, reply) {
        try {
            const tweet = await Tweet.findByPk(request.params.userId, {
                attributes: ['id', 'tweet_content', 'tweet_image']
            })
            if (!tweet) throw new NotFoundError("Tweet not found with id: " + request.params.id);
            reply.status(200).send(tweet)
        } catch (error) {
            reply.status(500).send({ msg: "Something went wrong, Could not load the tweets" })
        }
    }
}

module.exports = new TweetService;