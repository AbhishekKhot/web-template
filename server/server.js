const fastify = require('fastify')({ logger: true });
const db = require('./models')

const env = process.env.NODE_ENV || "development";
if (env === "development") require('dotenv').config()
const PORT = process.env.PORT || 3000

fastify.register(require('./routes/User'))

const start = async () => {
    try {
        await fastify.listen({ port: PORT, host: 'localhost' })
    } catch (error) {
        process.exit(1)
    }
}

db.sequelize
    .sync({ alter: true })
    .then(() => {
        console.log("Successfully synced with database")
        start()
    })
    .catch((error) => {
        console.log("Something went wrong while syncing with database")
    })