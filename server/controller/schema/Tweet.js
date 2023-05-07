const tweetSchema = {
    schema: {
        type: 'object',
        required: ['tweet_content'],
        properties: {
            tweet_content: {
                type: 'string'
            },
            tweet_image: {
                type: 'string'
            }
        }
    }
}

const getSingleTweetSchema = {
    schema: {
        response: {
            200: tweetSchema
        }
    }
}

module.exports = { tweetSchema, getSingleTweetSchema }