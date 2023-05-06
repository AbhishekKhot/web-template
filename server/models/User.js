const { Model } = require('sequelize')
const JWT = require('jsonwebtoken')


module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        getToken() {
            const payload = { userId: this.id, username: this.username };
            const access_token = JWT.sign(payload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1d' });
            return access_token;
        }

        static associate(models) {
            User.hasMany(models.Tweet, { foreignKey: 'userId', onDelete: "CASCADE" })
        }
    }

    User.init(
        {
            username: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    len: [2, 20]
                }
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
                validate: {
                    isEmail: true
                }

            },
            password: {
                type: DataTypes.STRING,
                allowNull: false
            }
        },
        {
            sequelize,
            tableName: 'users'
        }
    )
    return User
}