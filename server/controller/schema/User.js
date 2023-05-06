const loginSchema = {
    schema: {
        body: {
            type: 'object',
            required: ['email', 'password'],
            properties: {
                email: {
                    type: 'string',
                    format: 'email'
                },
                password: {
                    type: 'string'
                }
            }
        }
    },
    response: {
        200: {
            type: 'object',
            properties: {
                login_token: {
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
                    type: 'string',
                    format: 'email'
                },
                password: {
                    type: 'string'
                }
            }
        }
    },
    response: {
        200: {
            type: 'object',
            properties: {
                registration_token: {
                    type: 'string'
                }
            }
        }
    }
}

const forgotPasswordSchema = {
    schema: {
        body: {
            type: 'object',
            required: ['username' || 'email'],
            properties: {
                username: {
                    type: 'string'
                },
                email: {
                    type: 'string'
                }
            },
        }
    },
    response: {
        200: {
            type: 'object',
            properties: {
                message: {
                    type: 'string'
                }
            }
        }
    }
}

const resetPasswordsSchema = {
    schema: {
        body: {
            type: 'object',
            required: ['password'],
            properties: {
                password: {
                    type: 'string'
                }
            }
        }
    },
    response: {
        200: {
            type: 'string',
        }
    }
}

module.exports = {
    loginSchema,
    registrationSchema,
    forgotPasswordSchema,
    resetPasswordsSchema
}