const db = require('../models')

class AuthService {
    async loginUser(body, reply) {
        try {
            const { email, password } = body;
            const user = await db.User.findOne({ where: { email } });

            if (!user) reply.status(401).send('Invalid username or password')

            const isPasswordMatching = user.comparePassword(password);

            if (!isPasswordMatching) reply.status(401).send("Invalid Cerdentails")

            const access_token = user.getToken();
            return reply.status(200).send(access_token)

        } catch (error) {
            reply.status(500).send({ message: "error occured while login in user" })
        }
    }

    async registrationUser(body, reply) {
        try {
            const user = await db.User.create({ ...body })
            const access_token = user.getToken()
            return reply.status(201).send(access_token);
        } catch (error) {
            console.log(error)
            if (error.name === "SequelizeUniqueConstraintError") {
                reply.status(409).send({
                    msg: "email already in use",
                });
            }
            reply.status(500).send({
                msg: "error occurred while registering user",
            });
        }
    }
}

module.exports = new AuthService