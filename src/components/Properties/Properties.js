import React from 'react';
// import Swiper core and required modules
import { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Propimages1 from './Propimages1.svg';
import Propimage2 from './Propimage2.svg';
import vector2 from "./vector2.svg";
import './Properties.scss';
import Title from '../Title/Title';
const Properties = (props) => {
    return (
        <>

            <div className="prop-main">
                <div className="properties-main">
                    <div className="row">
                        <Title name={props.name} name2={props.name2} />
                        <div className="prop-text1 col-12 col-lg-6">Committed to building long-term relationships with our partners, suppliers and clients.</div>
                        <div className="prop-text2 col-12 col-lg-6">
                            <div>
                                We recognise that our success is the direct result of the hard work of
                                the people who work for us, with us and alongside us
                            </div>
                            <div>Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </div>
                        </div>
                        <div className="prop-ourproject">
                            <div className="row">

                                <span className="prop-project col-6 ">Our Projects</span>
                                <img className="prop-proj-img" src={vector2} alt="vector2" />
                                {/* <button className="prop-button1 col-2"><img className="prop-button-img" src={vector} alt="vector" /></button>
                                <button className="prop-button2 col-3">next<img className="prop-button-img1" src={vector1} alt="vector" /> </button> */}
                            </div>
                        </div>
                        <div className="row">
                            <div className="prop-images">
                                <Swiper
                                    spaceBetween={30}
                                    slidesPerView={3}
                                        autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                    }}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    navigation={false}
                                    modules={[Autoplay, Pagination, Navigation]}
                                    className="propeties-swiper"
                                >
                                    <SwiperSlide>
                                        <img className="prop-img-ele" src={Propimages1} alt="property 1"/>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img className="prop-img-ele" src={Propimage2} alt="property 2"/>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img className="prop-img-ele" src={Propimages1} alt="property 3"/>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img className="prop-img-ele" src={Propimage2} alt="property 4"/>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Properties;