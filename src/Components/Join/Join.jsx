import React from 'react'
import './Join.css'
import z from '../Assets/z.png'
import arr from '../Assets/arr.png'

const Join = () => {
    return (
        <div className='joinmain'>
            <div className='joinleft'>
                <img src={z} alt="" id='z' />
            </div>
            <div className='joinright'>
                <h1 id='joinh1'>Join 15+ million people <br />who already trust us <br />with their money</h1>
                <div className='joinbottom'>
                    <p id='homep'>Overall, this app has been a life-changer for me. It <br />has revolutionized the way I approach my <br />finances, providing me with the tools, insights, and <br />security I need to unlock my financial freedom.</p>
                    <div className='name'>
                    <h1>Ellena Putri</h1>
                    <div><img src={arr} alt="" /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Join