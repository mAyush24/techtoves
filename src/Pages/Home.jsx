import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import Footer from '../components/Footer'
function Home() {
    return (
        <div className="hidden">
            <div className="navbarh">
                {/* <img src="src/assets/download.jpeg.jpg" className="logo" /> */}
                <h2 className='logoh'>Techtoves</h2>
                <nav className='listh'>
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
                <div className="search-barh">
                    <input type="text" placeholder="Search..." />
                    <button className='btnh' type="submit">Search</button>
                </div>
                <div className="loginh">
                    <Link to='/login' className='btnh'>LogIn</Link>
                    <Link to='/signup/buyer' className='btnh'>SignUp</Link>
                </div>
            </div>
            <div className="containerh">
                <div className="rowh">
                    <div className="colh">
                        <h1>tech toves</h1>
                        <p>
                            A farmer is a person engaged in agriculture, raising living organisms
                            for food or raw materials.[1] The term usually applies to people who
                            do some combination of raising field crops, orchards, vineyards,
                            poultry, or other livestock.
                        </p>
                        <button type="button" className="buttonh">
                            EXPLORE
                        </button>
                    </div>
                    <div className="colh">
                        <div className="card1h">
                            {/* <h5>FARMERS</h5>
                            <p>for farmers</p> */}
                        </div>
                        <div className="card2h">
                            {/* <h5>FARMERS</h5>
                            <p>for farmers</p> */}
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>

    )
}

export default Home