const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class Tweet extends Model {
        static associate(models) {
            Tweet.belongsTo(models.User, { foreignKey: "userId", onDelete: "CASCADE" })
            Tweet.hasMany(models.Comment, {
                as: 'comments', foreignKey: "tweetId", onDelete: "CASCADE"
            })
        }
    }

    Tweet.init({
        tweet_content: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                max: 400
            }
        },
        tweet_image: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        like_count: {
            type: DataTypes.BIGINT,
            defaultValue: 0
        }
    }, {
        sequelize,
        tableName: "tweet"
    })

    return Tweet
}