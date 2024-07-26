import React from 'react'
import './Home.css'
import white from '../Assets/white.png'
import green from '../Assets/green.png'
import black from '../Assets/black.png'
import end from '../Assets/end.png'

const Home = () => {
    return (
        <div className='homemain'>
            <div className='homeleft'>
                <div><img src={white} alt="" id='white' /></div>
                <div><img src={green} alt="" id='green' /></div>
            </div>
            <div className='homemid'>
                <img src={black} alt="" id='black' />
            </div>
            <div className='homeright'>
                <h1 id='homeh1'>Control your <br />financial <br />future easily</h1>
                <p id='homep'>From easy money management, to financial goals <br />and investments.  Open your account <br />
                    in a flash</p>
                <div className='homebtns'>
                    <button id='openbtn1'>Open Account</button>
                    <button id='cardbtn'>Generate Your Card </button>
                </div>
                <div className='homeend'>
                    <img src={end} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Home