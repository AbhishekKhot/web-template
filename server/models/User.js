const { Model } = require('sequelize')
const bcrypt = require('bcrypt')
const JWT = require('jsonwebtoken')


module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        getToken() {
            const payload = { userId: this.id, username: this.username };
            const access_token = JWT.sign(payload, process.env.ACCESS_TOKEN_SECRET);
            return access_token;
        }

        async comparePassword(userPassword) {
            const isMatch = await bcrypt.compare(userPassword, this.password);
            return isMatch;
        }
        static associate(model) {
            
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
                allowNull: false,
                set(value) {
                    const salt = bcrypt.genSaltSync(10)
                    const hash = JWT.sign(value, salt)
                    this.setDataValue("password", hash)
                }
            }
        },
        {
            sequelize,
            tableName: 'users'
        }
    )
    return User
}