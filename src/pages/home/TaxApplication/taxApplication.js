import React from 'react'
import './taxApplicationStyle.css'
import TapTax from '../../../assets/Images/TapTax.png'
import AccuTax from '../../../assets/Images/AccuTax.png'
import SsrTax from '../../../assets/Images/SsrTax.png'
import TaxTime from '../../../assets/Images/TaxTime.png'

export default function taxApplication() {
    return (
        <div className='tax'>
            <div className='container1'>
                <h2 className='headingTax1'> Tax Application</h2>
                <h2 className='headingTax2'>Hosting</h2>
                <p className='paragraphTax'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et </p>
            </div>
            <div className='container2'>
                <img className='tapTax' src={TapTax} alt='taptax' />
                <img className='accuTax' src={AccuTax} alt='accutax' /> <br></br>
                <div className='child'>
                    <img className='ssrTax' src={SsrTax} alt='ssrtax' />
                    <img className='timeTax' src={TaxTime} alt='timetax' />
                </div>
            </div>

        </div>
    )
}
