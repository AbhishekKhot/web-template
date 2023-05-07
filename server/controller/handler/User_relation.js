const userRelationService = require('../../service/User_relation')

async function UserRealtionHandler(request, reply) {
    return await userRelationService.addFollowerFollowing(request, reply)
}

module.exports = { UserRealtionHandler }