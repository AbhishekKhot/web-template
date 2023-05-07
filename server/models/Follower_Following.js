const { Model, DataTypes } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class FollowerFollowing extends Model {
        static associate(models) {

        }
    }

    FollowerFollowing.init(
        {
            followerId: {
                type: DataTypes.INTEGER
            },

            followingId: {
                type: DataTypes.INTEGER
            }
        },
        {
            sequelize,
            tableName: 'followers_following',
            timestamps: false,
        }
    )

    FollowerFollowing.removeAttribute('id')

    return FollowerFollowing
}