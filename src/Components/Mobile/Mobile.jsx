import React from 'react'
import './Mobile.css'
import down from '../Assets/down.png'
import card from '../Assets/card.png'
import usd from '../Assets/usd.png'
import finsy from '../Assets/finsy.png'



const Mobile = () => {
    return (
        <div className='mobmain'>
            <h1 id='mobh1'>Get the Finsy mobile app.</h1>
            <p id='homep'>With this platform, you can access your account anywhere, <br />anytime for balance and so much more.</p>
            <div><img src={down} alt="" id='down' /></div>
            <div className='images'>
                <div><img src={usd} alt="" id='usd' /></div>
                <div><img src={finsy} alt="" id='finsy' /></div>
                <div><img src={card} alt="" id='card' /></div>
            </div>
            <h1 id='aa'>Save smart. Achieve more.</h1>
        </div>
    )
}

export default Mobile