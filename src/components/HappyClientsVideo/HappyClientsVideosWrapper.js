import React from "react";
// import Swiper core and required modules
import { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import HappyClientsVideos from "./HappyClientsVideos";


const HappyClientsVideosWrapper = (props) => {
    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                // autoplay={{
                //     delay: 2500,
                //     disableOnInteraction: false,
                // }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="clientsvideos-swiper top-carousel-nav"
            >
                <SwiperSlide>
                    <HappyClientsVideos videoUrl="https://www.youtube.com/embed/ECIhrH5diZE" />
                </SwiperSlide>
                <SwiperSlide>
                    <HappyClientsVideos videoUrl="https://www.youtube.com/embed/S76DWblbhyM" />
                </SwiperSlide>
                <SwiperSlide>
                    <HappyClientsVideos videoUrl="https://www.youtube.com/embed/ECIhrH5diZE" />
                </SwiperSlide>
                <SwiperSlide>
                    <HappyClientsVideos videoUrl="https://www.youtube.com/embed/NJHw5cr_X34" />
                </SwiperSlide>
            </Swiper>

        </>
    );
};

export default HappyClientsVideosWrapper;