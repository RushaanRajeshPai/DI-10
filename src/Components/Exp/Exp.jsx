import React from 'react'
import './Exp.css'
import a from '../Assets/a.png'
import b from '../Assets/b.png'
import c from '../Assets/c.png'
import d from '../Assets/d.png'
import e from '../Assets/e.png'
import akmal from '../Assets/akmal.png'
import income from '../Assets/income.png'
import bank from '../Assets/bank.png'
import eur from '../Assets/eur.png'
import figma from '../Assets/figma.png'
import box from '../Assets/box.png'

const Exp = () => {
    return (
        <div className='expmain'>
            <h1 id='exph1'>Feel the best experience <br />with our features</h1>
            <div className='exptop'>
                <div className='exptop1'>
                    <img src={a} alt="" id='a' />
                    <h1>Custom and design your card, <br />make it unique</h1>
                    <p id='homep'>Create a custom card that reflects your unique style <br /> and personality. Choose from a range of colors, <br />patterns, and designs to customize the look of your <br /> card.</p>
                    <div><img src={akmal} alt="" id='akmal' /></div>
                </div>
                <div className='exptop1'>
                    <div><img src={b} alt="" id='b' /></div>
                    <h1>Personalized your financial <br />insights and goals</h1>
                    <p id='homep'>Track your spending patterns, analyze income or <br />expenses easily, and receive personalized <br />recommendations to optimize your financial habits.</p>
                    <div><img src={income} alt="" id='akmal' /></div>
                </div>
            </div>
            <div className='expmid'>
                <div className='expmidleft'>
                    <img src={c} alt="" />
                    <h1>Free transfer anywhere around <br />
                    the world</h1>
                    <p id='homep'>Experience the freedom of hassle-free money <br />transfers with our free transfer admin finance app. <br />Say goodbye to unnecessary fees and enjoy <br />seamless transactions.</p>
                </div>
                <div className='expmidright'>
                    <img src={bank} alt="" />
                </div>
            </div>
            <div className='expdown'>
                <div className='expdownleft'>
                    <img src={d} alt="" />
                    <h1>Hold money in <br />30+ currencies</h1>
                    <img src={eur} alt="" />
                </div>
                <div className='expdownleft'>
                    <img src={e} alt="" />
                    <h1>Subscriptions control <br /> in one place</h1>
                    <img src={figma} alt="" />
                </div>
            </div>
            <h1 id='exph1a'>200+ The fastest growing <br />company use Finsy</h1>
            <p id='expp'>Many companies have tried using Finsy and they <br />trust the safety of their money</p>
            <div className='exprow'>
                <img src={box} alt="" />
                <img src={box} alt="" />
                <img src={box} alt="" />
                <img src={box} alt="" />
            </div>
            <div className='exprow1'>
                <img src={box} alt="" />
                <img src={box} alt="" />
                <img src={box} alt="" />
                <img src={box} alt="" />
            </div>
        </div>
    )
}

export default Exp
