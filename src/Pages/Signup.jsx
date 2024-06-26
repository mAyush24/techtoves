import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from './firebase'; // Adjusted path
import { createUserWithEmailAndPassword } from 'firebase/auth';
import './Signup.css';

function Signup() {

  const [name, setName] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [email, setEmail] = useState('');
  const [GST, setGST] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    return (
        <div className='center'>
            
            <div className="containersc">
                <h2 className="h2sc">
                    {/* <img src="src/assets/logo.png" alt="Logo" className="logosc" /> */}
                    Sign-up as Company
                </h2>
                <div className="form-containersc">
                    <form action=" " method="POST">
                        <div className="form-groupsc">
                            <label className='labelsc' htmlFor="name">Name:</label>
                            <input className='labelsc' type="text" id="name" name="name" required="" />
                        </div>
                        <div className="form-groupsc">
                            <label className='labelsc' htmlFor="phoneNo">Phone Number:</label>
                            <input className='labelsc' type="text" id="phoneNo" name="phoneNo" required="" />
                        </div>
                        <div className="form-groupsc">
                            <label className='labelsc' htmlFor="email">Email:</label>
                            <input className='labelsc' type="email" id="email" name="email" required="" />
                        </div>
                        <div className="form-groupsc">
                            <label className='labelsc' htmlFor="GST">GST Number:</label>
                            <input className='labelsc' type="text" id="GST" name="GST" required="" />
                        </div>
                        <div className="form-groupsc">
                            <label className='labelsc' htmlFor="adress">Company Address:</label>
                            <input className='labelsc' type="text" id="Address" name="address" required="" />
                        </div>
                        <div className="form-groupsc">
                            <label className='labelsc' htmlFor="password">Password:</label>
                            <input className='labelsc' type="password" id="password" name="password" required="" />
                        </div>
                        <div className="form-groupsc">
                            <label className='labelsc' htmlFor="confirmPassword">Confirm Password:</label>
                            <input
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                required=""
                            />
                        </div>
                        <button className='btnsc' type="submit">Submit</button>
                        Farmer?: <Link className='sign' to='/signup/farmer'>SignUp as a Farmer</Link>
                    </form>
                </div>
            </div>
        </div>


    try {
      await createUserWithEmailAndPassword(auth, email, password);
      // Handle successful signup (e.g., redirect or display a success message)
    } catch (error) {
      setError('Failed to create an account. Please try again.');
      console.error('Signup error', error);
    }
  };

  return (
    <>
      <div className="containersc">
        <h2 className="h2sc">
          <img src="/src/assets/logosc.png" alt="Logo" className="logosc" /> Sign-up Company
        </h2>
        <div className="form-containersc">
          {error && <p className="error">{error}</p>}
          <form onSubmit={handleSignup}>
            <div className="form-groupsc">
              <label className='labelsc' htmlFor="name">Name:</label>
              <input
                className='labelsc'
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-groupsc">
              <label className='labelsc' htmlFor="phoneNo">Phone Number:</label>
              <input
                className='labelsc'
                type="text"
                id="phoneNo"
                name="phoneNo"
                value={phoneNo}
                onChange={(e) => setPhoneNo(e.target.value)}
                required
              />
            </div>
            <div className="form-groupsc">
              <label className='labelsc' htmlFor="email">Email:</label>
              <input
                className='labelsc'
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-groupsc">
              <label className='labelsc' htmlFor="GST">GST Number:</label>
              <input
                className='labelsc'
                type="text"
                id="GST"
                name="GST"
                value={GST}
                onChange={(e) => setGST(e.target.value)}
                required
              />
            </div>
            <div className="form-groupsc">
              <label className='labelsc' htmlFor="address">Company Address:</label>
              <input
                className='labelsc'
                type="text"
                id="address"
                name="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>
            <div className="form-groupsc">
              <label className='labelsc' htmlFor="password">Password:</label>
              <input
                className='labelsc'
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="form-groupsc">
              <label className='labelsc' htmlFor="confirmPassword">Confirm Password:</label>
              <input
                className='labelsc'
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <button className='btnsc' type="submit">Submit</button>
            <Link to='/signup/farmer'>SignUp as a Farmer</Link>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;