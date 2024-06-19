const { Router } = require('express')
const login = require('../feature/login')
const register = require('../feature/register')

const authRouter = Router()

authRouter.post('/login', login)
authRouter.post('/register', register)

module.exports = authRouter