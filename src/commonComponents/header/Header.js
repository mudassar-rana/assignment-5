import React from 'react'
import './HeaderStyle.css'
import { Row, Col } from 'react-bootstrap'

export default function Header() {
    return (
        <div className='mainHeader'>

            <Row>
                <Col lg={9} md={9}>
                    <Row >
                        <Col lg={4} md={4}>
                            <h1 className='heading'>Logo here</h1>
                        </Col>
                        <Col lg={8} md={8}>
                            <ul className='headerList'>
                                <li>By Solutions</li>
                                <li>By Industry</li>
                                <li>Plans&Offers</li>
                                <li>Data Centers</li>
                                <li> About Us</li>
                            </ul>
                        </Col>
                    </Row>

                </Col>
                <Col lg={3}>
                    <button className='button'>
                        Try for free
                    </button>
                </Col>


            </Row>



        </div>
    )
}
