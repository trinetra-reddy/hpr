import React from "react";
import "./LightHouseCarousel.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper";


const LightHouseCarousel = (props) => {

    return (
        <>
            <div className="lighthouse-image-carousel">
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="lighthouse-imageCarousel-swiper"
                >
                    {props.lightHouseimages.map((lighthouseimage, index) => (
                        <SwiperSlide key={index}>
                            <div className="lighthouse-image-carousel__slide">
                                <img className="lighthouse-CarouselImage" src={lighthouseimage} alt="LightHouse-Carouselimage" />
                            </div>
                        </SwiperSlide>
                    ))}

                </Swiper>
            </div>
        </>
    );
};

export default LightHouseCarousel;