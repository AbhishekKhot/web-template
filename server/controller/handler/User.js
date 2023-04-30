const authService = require("../../service/User");

async function loginUserHandler(request, reply) {
    return await authService.loginUser(request.body, reply)
}

async function registrationUserHandler(request, reply) {
    return await authService.registrationUser(request.body, reply)
}

module.exports = {
    loginUserHandler,
    registrationUserHandler
}
