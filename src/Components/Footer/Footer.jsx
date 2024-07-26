import React from 'react'
import './Footer.css'
import msg from '../Assets/msg.png'
import logo1 from '../Assets/logo1.png'

const Footer = () => {
    return (
        <div className='footermain'>
            <div className='footertop'>
                <div className='footertopl'>
                    <div><img src={msg} alt="" id='msg' /></div>
                    <h1 id='fh1'>Keep up with the <br /> latest</h1>
                    <p>Join our newsletter to stay up to date on features and releases.</p>
                </div>
                <div className='footertopr'>
                    <p>Stay upto date</p>
                    <div className='aaa'>
                        <input type="text" placeholder='Enter your email' id='ip' />
                        <button id='openbtn1'>Subscribe</button>
                    </div>
                </div>
            </div>
            <div className='footerbot'>
                <div className='foot1'>
                    <div><img src={logo1} alt="" /></div>
                </div>
                <div className='foot2'>
                    <h3>Finsy</h3>
                    <p>Payment</p>
                    <p>Card</p>
                    <p>Pricing</p>
                </div>
                <div className='foot2'>
                    <h3>Products</h3>
                    <p>Perosnal</p>
                    <p>Business</p>
                    <p>Invoice</p>
                </div>
                <div className='foot2'>
                    <h3>Company</h3>
                    <p>About</p>
                    <p>Presskit</p>
                    <p>Careers</p>
                </div>
                <div className='foot2'>
                    <h3>Developer</h3>
                    <p>API Documentation</p>
                    <p>Guide</p>
                    <p>Change Log</p>
                </div>
                <div className='foot2'>
                    <h3>Support</h3>
                    <p>Help</p>
                    <p>FAQ</p>
                    <p>Contact</p>
                </div>
                <div className='foot2'>
                    <h3>Legal</h3>
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                    <p>Cookies</p>
                </div>
            </div>
        </div>
    )
}

export default Footer