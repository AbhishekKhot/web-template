const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class Comment extends Model {
        static associate(models) {
            Comment.belongsTo(models.Tweet, { foreignKey: 'tweetId', onDelete: "CASCADE" })
        }
    }

    Comment.init(
        {
            comment_body: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    max: 400
                }
            },
        },
        {
            sequelize,
            tableName: 'comment'
        }
    )

    return Comment
}