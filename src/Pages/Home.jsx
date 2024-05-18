import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
function Home() {
    return (
        <>

            <div className="navbar">
                {/* <img src="src/assets/download.jpeg.jpg" className="logo" /> */}
                <h2 className='logo'>Techtoves</h2>
                <nav className='list'>
                    <ul>
                        <li>
                            <a href="">HOME</a>
                        </li>
                        <li>
                            <a href="">REGION</a>
                        </li>
                        <li>
                            <a href="">ABOUT</a>
                        </li>
                    </ul>
                </nav>
                {/* <img src="src/assets/UI_stroke-46-512.webp" className="logo" /> */}
                <div className="search-bar">
                    <input type="text" placeholder="Search..." />
                    <button className='btn' type="submit">Search</button>
                </div>
                <div className="login">
                    <Link to='\login' className='btn'>LogIn</Link>
                    <Link to='\signUp' className='btn'>SignUp</Link>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1>tech toves</h1>
                        <p>
                            A farmer is a person engaged in agriculture, raising living organisms
                            for food or raw materials.[1] The term usually applies to people who
                            do some combination of raising field crops, orchards, vineyards,
                            poultry, or other livestock.
                        </p>
                        <button type="button" className="button">
                            EXPLORE
                        </button>
                    </div>
                    <div className="col">
                        <div className="card1">
                            <h5>FARMERS</h5>
                            <p>for farmers</p>
                        </div>
                        <div className="card2">
                            <h5>FARMERS</h5>
                            <p>for farmers</p>
                        </div>
                        <div className="card2">
                            <h5>FARMERS</h5>
                            <p>for farmers</p>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Home