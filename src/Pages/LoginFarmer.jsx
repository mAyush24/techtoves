import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { auth } from './firebase' // Adjust the path if necessary

function LoginFarmer() {
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = React.useState('')
  const [error, setError] = React.useState('')

  const handleLogin = async (e) => {
    e.preventDefault()
    setError('')

    try {
      await auth.signInWithEmailAndPassword(email, password)
      console.log('Login successful!') // Log success message
      // Handle successful login (e.g., redirect to a different page)
      history.push('/dashboard')
    } catch (error) {
      setError('Failed to sign in. Please try again.')
      console.error('Login error', error)
    }
  }

  return (
    <>
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
          <button type="submit">Login</button>
        </form>
        {error && <p className="error">{error}</p>}
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
