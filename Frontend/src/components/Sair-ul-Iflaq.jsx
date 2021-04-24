import React from 'react'
import './Styles-components.css'
import logo from './Logo.svg'

let Sairuliflaq = () => {
    return (
        <div className='Sairuliflaq'>
            <div className="img">
                <img src={logo} alt=""/>
            </div>
            <div className="text">
                <h1>Silsila e Nasb</h1>
                <p>
                Spiritualism is the amorous union of Allah’s sayings and the life of Holy Prophet Hazrat Muhammad (PBUH). This ardent love (Ishq) is the extreme pinnacle and also the base of Sufism. The precept and practice of a Sufi always wanders in the horizons of his spiritual Master’s (Sheikh) consent, Holy Prophet Hazrat Muhammad’s (PBUH) love and Allah’s pleasure. The history of Sufism eulogizes all those great personalities ... <a className='readMore' href="#">Read More</a>
                </p>
            </div>
        </div>
    )
}

export default Sairuliflaq