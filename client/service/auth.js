import http from '../api'

class AuthService {
    register(body) {
        return http.post('/register', body)
    }
    login() {
        return http.post('/login', body)
    }
}

export default new AuthService()