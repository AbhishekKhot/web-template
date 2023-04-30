const loginSchema = {
    schema: {
        body: {
            type: 'object',
            properties: {
                email: {
                    type: 'string',
                    format: 'email'
                },
                password: {
                    type: 'string'
                }
            }
        },
        required: ["email", "password"]
    },
    response: {
        200: {
            type: 'object',
            propeties: {
                access_token: {
                    type: 'string'
                }
            }
        }
    }
}

const registrationSchema = {
    schema: {
        body: {
            type: 'object',
            properties: {
                username: {
                    type: 'string'
                },
                email: {
                    type: 'string'
                },
                password: {
                    type: 'string'
                }
            }
        },
        required: ['username', 'email', 'password']
    },
    response: {
        200: {
            type: 'object',
            properties: {
                access_token: {
                    type: 'string'
                }
            }
        }
    }
}


module.exports = {
    loginSchema,
    registrationSchema
}