import React, { useState } from 'react'
import authService from '../../../service/auth'
import './style.css'

export default function Signup() {
    const [username, setUserName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    function handleSignUp() {
        if (!username || !email || !password) return
        username.trim()
        email.trim()
        password.trim()
        authService.register({ username, email, password })
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <div className="main-signup-container">
            <div className='signup-container'>
                <h1>Signup</h1>
                <input className='username-input' value={username} onChange={(e) => setUserName(e.target.value)} type='text' placeholder='User name' />
                <input className='email-input' value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Email' />
                <input className='password-input' value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Password' />
                <button className='signup-button' onClick={handleSignUp}>SIGN UP</button>
                <div className='bottom-text'>
                    <h5>Already have an account?</h5>
                    <h5 className="login-text">LOGIN</h5>
                </div>
            </div>
        </div>
    )
}
