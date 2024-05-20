import React from 'react'
import './Signupfarmer.css'
import { Link } from 'react-router-dom'

function Signupfarmer() {
    return (
        <div className='center'>
            <div className="containersf">
                <h2 className="h2sf">
                    {/* <img src="src/assets/potato.jpeg" className="logosf" /> */}
                    Sign-up as Farmer
                </h2>
                {/* <h2 class="h2">Sign-up Farmer</h2> */}
                <div className="form-containersf">
                    <form action=" " method="POST">
                        <div className="form-groupsf">
                            <label className='label' htmlFor="name">Name:</label>
                            <input className='label' type="text" id="name" name="name" required="" />
                        </div>
                        <div className="form-groupsf">
                            <label className='label' htmlFor="phoneNo">Phone Number:</label>
                            <input className='label' type="text" id="phoneNo" name="phoneNo" required="" />
                        </div>
                        <div className="form-groupsf">
                            <label className='label' htmlFor="email">Email:</label>
                            <input className='label' type="email" id="email" name="email" />
                        </div>
                        <div className="form-groupsf">
                            <label className='label' htmlFor="vahaiKhata">Vahai Khata:</label>
                            <input className='label' type="text" id="vahaiKhata" name="vahaiKhata" required="" />
                        </div>
                        <div className="form-groupsf">
                            <label className='label' htmlFor="pincode">Pincode:</label>
                            <input className='label' type="text" id="pincode" name="pincode" required="" />
                        </div>
                        <div className="form-groupsf">
                            <label className='label' htmlFor="password">Password:</label>
                            <input className='label' type="password" id="password" name="password" required="" />
                        </div>
                        <div className="form-groupsf">
                            <label className='label' htmlFor="confirmPassword">Confirm Password:</label>
                            <input
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                required=""
                            />
                        </div>
                        <button className='btnsf' type="submit">Submit</button>
                        Company?: <Link className='sign' to='/signup/buyer'>SignUp as a Buyer</Link>

                    </form>
                </div>
            </div>
        </div>

    )
}

export default Signupfarmer