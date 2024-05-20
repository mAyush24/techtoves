import React from 'react'
import './Signup.css'
import { Link } from 'react-router-dom'

function Signup() {
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

    )
}

export default Signup