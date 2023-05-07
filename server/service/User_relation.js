const { FollowerFollowing } = require('../models')

class UserRelationService {
    async addFollowerFollowing(request, reply) {
        try {
            await FollowerFollowing.create({ ...request.body })
            reply.status(201).send({ msg: "Successfully followed user" })
        } catch (error) {
            reply.status(500).send({ msg: 'Something went wrong while follogin user' })
        }
    }
}

module.exports = new UserRelationService