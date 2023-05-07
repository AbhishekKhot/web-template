const authService = require("../../service/User");

async function loginUserHandler(request, reply) {
    return await authService.loginUser(request.body, reply)
}

async function registrationUserHandler(request, reply) {
    return await authService.registrationUser(request.body, reply)
}

async function forgotPasswordHandler(request, reply) {
    return await authService.forgotPassword(request.body, reply)
}

async function resetPasswordHandler(request, reply) {
    return await authService.resetPassword(request.body, request.params, reply)
}

async function userTweetsHandler(request, reply) {
    return await authService.getUserTweets(request, reply)
}

module.exports = {
    loginUserHandler,
    registrationUserHandler,
    forgotPasswordHandler,
    resetPasswordHandler,
    userTweetsHandler
}
