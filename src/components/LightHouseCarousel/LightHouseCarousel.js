import React from "react";
import "./LightHouseCarousel.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper";
import lighthouseimg1 from "../../images/LightHouseCarouselimages/lighthouse-img1.jpg"
import lighthouseimg2 from "../../images/LightHouseCarouselimages/lighthouse-img2.jpg"
import lighthouseimg3 from "../../images/LightHouseCarouselimages/lighthouse-img3.jpg"
import lighthouseimg4 from "../../images/LightHouseCarouselimages/lighthouse-img4.jpg"
import lighthouseimg5 from "../../images/LightHouseCarouselimages/lighthouse-img5.jpg"
import lighthouseimg6 from "../../images/LightHouseCarouselimages/lighthouse-img6.jpg"
import lighthouseimg7 from "../../images/LightHouseCarouselimages/lighthouse-img7.jpg"
import lighthouseimg8 from "../../images/LightHouseCarouselimages/lighthouse-img8.jpg"

const LightHouseCarousel = () => {

    const lightHouseImages = [lighthouseimg1, lighthouseimg2, lighthouseimg3, lighthouseimg4, lighthouseimg5, lighthouseimg6, lighthouseimg7, lighthouseimg8];

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
                    {lightHouseImages.map((lighthouseimage, index) => (
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