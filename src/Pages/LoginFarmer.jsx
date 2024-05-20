import React from 'react'
import { Link } from 'react-router-dom'
import './LoginFarmer.css'

function LoginFarmer() {
    return (
        <>
            <div className="login-containerlf">
                <h2>Login </h2>
                <form>
                    <input type="email" name="email" id="email" placeholder='Email' required='' />
                    <input type="password" placeholder="Password" required="" />
                    <Link to='/dashboard'>Login</Link>
                </form>
                <div className="linkslf">
                    <a href="#">Forgot Password?</a>
                    <p>
                        Don't have an account? <Link to="/signup/farmer">Sign up here</Link>
                    </p>
                </div>
            </div>
        </>

    )
}

export default LoginFarmer