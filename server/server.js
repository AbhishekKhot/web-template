const fastify = require('fastify')({ logger: true });
const db = require('./models')

const env = process.env.NODE_ENV || "development";
if (env === "development") require('dotenv').config()
const PORT = process.env.PORT || 3000

fastify.addHook('preHandler', (request, reply, done) => {
    const allowedPaths = ["/register", "/login"];

    if (allowedPaths.includes(request.url)) {
        reply.header("Access-Control-Allow-Origin", "*");
        reply.header("Access-Control-Allow-Methods", "POST");
        reply.header("Access-Control-Allow-Headers", "*");
    }
    //checking if the request if preflight request
    if (request.method === "OPTIONS") return reply.send();
    done();
})
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