import React from 'react'
import './CustomerTestimonialsStyle.css'
import { Row, Col } from 'react-bootstrap'
import NameOne from '../../../assets/Images/Name.jpeg'
import NameTwo from '../../../assets/Images/Name1.jpeg'
import NameThree from '../../../assets/Images/Name2.jpeg'
import StarsImage from '../../../assets/Images/stars.png'
import ArrowLeft from '../../../assets/Images/Arrow.png'
import CPA from '../../../assets/Images/CPA.png'
export default function CustomerTestimonials() {
    return (
        <div>
            <h4 className='customerHeading'>Customer <span style={{ color: '#f47070' }}> Testimonials </span></h4>

            <div className='divMain'>
                <div className='mainName' >
                    <div style={{ backgroundColor: '#c7c6c4', height: '150px' }}>
                    </div>
                    <img className='imgOne' src={NameOne} alt='nameOne' />
                    <h6 className='headingOne'>NameOne</h6>
                    <img className='starOne' src={StarsImage} alt='star' />
                    <p className='parahOne'> Lorem ipsum dolor sit amet, consetetur</p>

                </div>
                <div className='mainName1' >
                    <div className='backgroundimg' style={{ backgroundColor: ' #f35c51 ', height: '200px' }}>
                    </div>
                    <img className='imgtwo' src={NameTwo} alt='nametwo' />
                    <h6 className='headingTwo'>NameTwo</h6>
                    <img className='starTwo' src={StarsImage} alt='star' />
                    <p className='parahTwo'> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                    </p>
                    <h6 className='headingRead'>Read More</h6>
                </div>
                <div className='mainName' >
                    <div style={{ backgroundColor: '#c7c6c4', height: '150px' }}>
                    </div>
                    <img className='imgthr' src={NameThree} alt='namethr' />
                    <h6 className='headingOne'>NameThree</h6>
                    <img className='starOne' src={StarsImage} alt='star' />
                    <p className='parahOne'> Lorem ipsum dolor sit amet, consetetur</p>

                </div>

            </div>
            <div className='ratingMain'>
                <div className='rating'>
                    <div>
                        <img src={CPA} />

                    </div>
                    <div>
                        <h6> CPA Journal Rating</h6>
                        <img className='1mg1' style={{ width: '100px' }} src={StarsImage} />
                    </div>
                </div>
                <div className='rating'>
                    <div>
                        <img src={CPA} />

                    </div>
                    <div>
                        <h6 style={{ fontsize: "small" }}> CPA Journal Rating</h6>
                        <img className='1mg1' style={{ width: '100px' }} src={StarsImage} />
                    </div>
                </div>
                <div className='rating'>
                    <div>
                        <img src={CPA} />

                    </div>
                    <div>
                        <h6> CPA Journal Rating</h6>
                        <img className='1mg1' style={{ width: '100px' }} src={StarsImage} />
                    </div>
                </div>
                <div className='rating'>
                    <div>
                        <img className='1mg1' src={CPA} />

                    </div>
                    <div>
                        <h6> CPA Journal Rating</h6>
                        <img className='1mg1' style={{ width: '100px' }} src={StarsImage} />
                    </div>
                </div>
            </div>

        </div >
    )
}
