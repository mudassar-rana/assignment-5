import React from 'react'
import './logoPictureStyle.css'
import MicroSoftImage from '../../../assets/Images/microsoft.png'
import VeeamImage from '../../../assets/Images/veeam.png'
import VmWareImage from '../../../assets/Images/vmware.png'
import SalesForceImage from '../../../assets/Images/salesforce.png'
export default function logoPictures() {
    return (
        <div>
            <img className='micro' src={MicroSoftImage} alt='Microsoft' />
            <img className='veeam' src={VeeamImage} alt='veeam' />
            <img className='vmware' src={VmWareImage} alt='vmware' />
            <img className='sales' src={SalesForceImage} alt='salesforce' />
            <img className='veeam' src={VeeamImage} alt='veeam' />

        </div>
    )
}
