const { User, Op } = require('../models')
const { NotFoundError } = require("../lib/serverErrors");
const sendEmail = require('../../server/utils/sendEmail')

class AuthService {
    async loginUser(body, reply) {
        try {
            const user = await User.findOne({
                attributes: ['id', 'username', 'email', 'password'],
                where: {
                    email: body.email,
                }
            })

            if (!user) reply.status(401).send({ msg: 'Invalid username or email' })
            if (body.password != user.password) reply.status(401).send({ msg: "Invalid Cerdentails" })
            const login_token = user.getToken();
            console.log("LOGIN TOKEN = " + login_token)
            return reply.status(200).send({ login_token: login_token })

        } catch (error) {
            reply.status(500).send({ message: "error occured while login in user" })
        }
    }

    async registrationUser(body, reply) {
        try {
            const user = await User.create({ ...body })
            const registration_token = user.getToken()
            return reply.status(201).send({ registration_token: registration_token });
        } catch (error) {
            console.log(error)
            if (error.name === "SequelizeUniqueConstraintError") {
                reply.status(409).send({
                    msg: "email already in use",
                });
            }

            const error_message = error.errors[0].message.split('.')
            if (error.name === "SequelizeValidationError") {
                reply.status(409).send({
                    msg: error_message[1]
                })
            }
            reply.status(500).send({
                msg: 'error occurred while registering user',
            });
        }
    }

    async forgotPassword(body, reply) {
        const { username, email } = body
        try {
            const user = await User.findOne({
                attributes: ["id", "username", "email"],
                where: {
                    [Op.or]: [
                        { username: { [Op.iLike]: `%${username}%` } },
                        { email: { [Op.iLike]: `%${email}%` } }
                    ]
                }
            })
            if (!user) reply.status(401).send({ msg: 'Invalid username or email' })
            const token = user.getToken()
            const link = `http://localhost:3000?id=${user.id}&token=${token}`;
            await sendEmail(body.email, "Password reset", link);
            return reply.status(201).send({ reset_password_link: link });
        } catch (error) {
            reply.status(500).send({
                msg: `error occurred while resetting your password ${error}`,
            });
        }
    }

    async resetPassword(body, params, reply) {
        try {
            const user = await User.findByPk(params.id, {
                attributes: ['id', 'username', 'password']
            })

            await user.update(
                { password: body.password },
                { where: { id: params.id } }
            )
            return reply.status(200).send("password updated successfully")
        } catch (error) {
            reply.status(500).send({
                msg: `error occurred while resetting your password ${error}`
            })
        }
    }

    async getUserTweets(request, reply) {
        try {
            const tweets = await User.findByPk(request.params.id, {
                attributes: ['id', 'username', 'password'],
                include: ['tweets']
            })
            if (!tweets) throw new NotFoundError("User not found with id: " + request.params.id);
            reply.status(201).send(JSON.stringify(tweets))
        } catch (error) {
            reply.status(500).send({ msg: "Something went wrong" + error })
        }
    }
}

module.exports = new AuthService