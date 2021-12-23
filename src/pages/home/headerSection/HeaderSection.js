import React from 'react';
import { Form } from 'react-bootstrap';
import './HeaderSectionStyle.css';
import { Row, Col } from 'react-bootstrap';
import Header from '../../../commonComponents/header/Header';
import CloudHostingImage from '../../../assets/Images/Cloudhosting-amico.png';
import CloudHostingImage1 from '../../../assets/Images/Cloudhosting-cuate.png';
import Arrow from '../../../../src/assets/Images/Arrow.png'

export default function HeaderSection() {
    return (
        <div className='main'>
            <Header />
            <Row >
                <Col className='bgMain' lg={9} md={9}>
                    <h5 className='headingTime'>Its time to give your business</h5>
                    <h1 className='headingSpin'> A Future Spin </h1>
                    <p className='hostingparagraph'> Host any software on our secured cloud now</p>
                    <button className='btn2'>Try for free</button>
                    <button className='btn3'>See plans & offers </button>

                </Col>
                <Col lg={3} md={3}>
                    <img className='cloudHosting1' src={CloudHostingImage} alt='CloudHosting' />
                    <img className='cloudHosting2' src={CloudHostingImage1} alt='CloudHosting1' />
                </Col>
            </Row >
            <span className='pTrusted'> Trusted By</span>
            <img className='arrow' src={Arrow} alt='Arrow' />

        </div>
    )
}
