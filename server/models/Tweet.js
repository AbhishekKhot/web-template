const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class Tweet extends Model {
        static associate(models) {
            Tweet.belongsTo(models.User, { foreignKey: "userId", onDelete: "CASCADE" })
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
        }
    }, {
        sequelize,
        tableName: "tweet"
    })

    return Tweet
}