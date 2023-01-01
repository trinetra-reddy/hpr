import React from "react";
import "./Ongoingprojects.scss";
import duplex from '../../images/on-going/duplex.jpg';
import amenities from '../../images/on-going/amenities.png';
import brands from '../../images/on-going/brands.png';
import independent from '../../images/on-going/independent.png';
import littleOAKS from '../../images/carouselImages/little_OAKS.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
const Ongoingprojects = () => {
  return (
    <>
      <div className="Ongoingproject-main">
        <div className="Ongoingproject-header-wrapper">
          <h1 className="Ongoingproject-header">ONGOING PROJECTS</h1>
        </div>
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          pagination={false}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          className="Ongoingproject-projects-wrapper"
        >
          <SwiperSlide>
            <div className="Ongoingproject-projects">
              <img
                className="Ongoingproject-images"
                src={independent}
                alt="Ongoingproject3"
              ></img>
            </div>
          </SwiperSlide>
          
          <SwiperSlide>
            <div className="Ongoingproject-projects">
              <img
                className="Ongoingproject-images"
                src={amenities}
                alt="Ongoingproject2"
              ></img>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="Ongoingproject-projects">
              <img
                className="Ongoingproject-images"
                src={brands}
                alt="Ongoingproject3"
              ></img>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="Ongoingproject-projects">
              <img
                className="Ongoingproject-images"
                src={duplex}
                alt="Ongoingproject1"
              ></img>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="Ongoingproject-projects">
              <img
                className="Ongoingproject-images"
                src={littleOAKS}
                alt="Ongoingproject1"
              ></img>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};
export default Ongoingprojects;
