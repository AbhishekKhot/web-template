import React from 'react'
import './style.css'

export default function Login() {

    return (
        <div className="main-login-container">
            <div className='login-container'>
                <h1>Login</h1>
                <input className='email-input' type='email' placeholder='email' />
                <input className='password-input' type='password' placeholder='password' />
                <button className='login-button'>LOGIN</button>
                <div className='bottom-text'>
                    <h5>Not registered yet!</h5>
                    <h5 className="register-text">REGISTER HERE</h5>
                </div>
            </div>
        </div>
    )
}
