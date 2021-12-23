import React from 'react'
import './AceHostingStyle.css'
import { Row, Col } from 'react-bootstrap'
import Circle from '../../../assets/Images/Circle.png'
import TeamImage from '../../../assets/Images/TeamImage.png'

export default function AceHosting() {
    return (
        <div>
            <h2 className='headingAce'>why Ace Cloud <span style={{ color: ' #f47878' }}> Hosting ? </span></h2>
            <div className='collum'>
                <Row>
                    <Col lg={6} md={9}>
                        <div className='circleMain'>
                            <img className='circle' src={Circle} alt='circle' />
                            <h4 className='headingCircle'>Always on Support</h4>
                            <p className='circleParah'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et </p>
                        </div>
                    </Col>
                    <Col lg={6} md={6}>
                        <img className='teamImg' src={TeamImage} alt='Team' />
                    </Col>
                </Row>
            </div>
        </div>
    )
}
