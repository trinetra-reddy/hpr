import React from 'react';
// import Swiper core and required modules
import { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Floorplan.scss';
import Title from '../Title/Title';

const Floorplan = (props) => {
  return (
    <>
      <div className="floorplans component-wrapper">
          <Title name="Floor" name2=" Plan" />
          <div className="floorplans__text">
              Build by best engineers and created best floor plan
          </div>
          <div className="floorplans__swiper-wrapper">
            <Swiper
              spaceBetween={50}
              slidesPerView={2}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="floorplan-swiper"
            >
              <SwiperSlide>
                <img className="floorplans__img" src={props.img1} alt="typical-floorplan" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="floorplans__img" src={props.img2} alt="stilt-floorplan" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="floorplans__img" src={props.img1} alt="typical-floorplan" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="floorplans__img" src={props.img2} alt="stilt-floorplan" />
              </SwiperSlide>
            </Swiper>
        </div>
      </div>
    </>
  );
}
export default Floorplan;