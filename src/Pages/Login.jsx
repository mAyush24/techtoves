import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import './LoginFarmer.css'

function Login() {

  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = React.useState('')
  const [error, setError] = React.useState('')
  const auth = getAuth();

  const handleLogin = async (e) => {
    e.preventDefault()
    setError('')

    try {
      await signInWithEmailAndPassword(auth, email, password)
      console.log('Login successful!')
      navigate('/buiseness')
      // Log success message
      // Handle successful login (e.g., redirect to a different page)
    } catch (error) {
      setError('Failed to sign in. Please try again.')
      console.error('Login error', error)
    }
  }

  return (
    <div className='center'>
      <div className="login-containerlf">
        <h2>Login </h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Link style={{textDecoration:'none', color:'white', backgroundColor:'green', padding:'4px 10px'}} to='/dashboard' type="submit">Login</Link>
        </form>
        {error && <p className="error">{error}</p>}
        <div className="linkslf">
          <Link to='/login/'>For Company</Link> <br />
          <a href="#">Forgot Password?</a>
          <p>
            Don't have an account? <Link to="/signup/farmer">Sign up here</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login