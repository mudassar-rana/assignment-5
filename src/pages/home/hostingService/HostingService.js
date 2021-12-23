import React from 'react'
import './HostingServiceStyle.css'
import { Row, Col } from 'react-bootstrap'
import BookImage from '../../../assets/Images/book.png'
import ArrowNoImage from '../../../assets/Images/Arrow2.png'
import QuickBookImage from '../../../assets/Images/UploadPic.png'
import DotsImage from '../../../assets/Images/dots.png'
export default function HostingService() {
    return (
        <div className='main1'>
            <h1 className='headinghosting'> Our Application <span className='spanheading'>Hosting service </span></h1>

            <p className='paragraphhosting'> we host any application on our secured cloud at nominal price </p>
            {/* <img className='dots' src={DotsImage} alt='dot' /> */}
            <Row>
                <Col lg={3} md={3} className='back'>
                    <img className='book' src={BookImage} alt='book' />
                    <h4 className='headingbook'>Quick Book</h4>
                    <p className='quickbook'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et </p>
                    <button className='btnbook'> Book Now </button>
                </Col>
                <Col lg={9} md={9} >
                    <Row>
                        <Col lg={7} md={7}>
                            <button className='btnCloud'> Cloud Hosting </button>
                            <button className='btnLicence'> Buy Licence</button> <br></br>
                            <img className='arrowNo2' src={ArrowNoImage} alt='Arrow' />
                            <h5 className='headingNo1'>Heading One</h5>
                            <p className='paragraphheading'>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
                            </p>
                            <button className='btnPlans'> Compare Plans </button> <br></br>
                            <button className='btnExpolre'> Explore QuickBooks Hosting</button>
                            <p className='paragraphAdd'> Unlimited Add-Ons, Integrations, and Application scan be hosted along with QuickBooks</p>

                        </Col>
                        <Col lg={5} md={5}>

                            <img className='quickImg' src={QuickBookImage} alt='Image' />
                        </Col>

                    </Row>
                </Col>



            </Row>
        </div >
    )
}
