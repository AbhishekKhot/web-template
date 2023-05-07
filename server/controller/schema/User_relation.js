const UserRelationSchema = {
    schema: {
        type: 'object',
        required: ['followerId', 'followingId'],
        properties: {
            followerId: {
                type: 'string'
            },
            followingId: {
                type: 'string'
            }
        }
    }
}

module.exports = { UserRelationSchema }