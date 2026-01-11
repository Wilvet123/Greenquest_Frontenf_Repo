import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

import slide_image_1 from '../assets/greenquestclub/street2schools/street2schools1.jpg';
import slide_image_2 from '../assets/greenquestclub/Yaba/GREENQUEST24.jpg';
import slide_image_3 from '../assets/greenquestclub/street2schools/street2schools3.jpg';
import slide_image_4 from '../assets/greenquestclub/street2schools/street2schools12.jpg';
import slide_image_5 from '../assets/greenquestclub/Yaba/GREENQUEST25.jpg';
import slide_image_6 from '../assets/greenquestclub/Yaba/GREENQUEST32.jpg';
import slide_image_7 from '../assets/greenquestclub/street2schools/street2schools4.jpg';
import slide_image_8 from '../assets/greenquestclub/street2schools/street2schools9.jpg';
import slide_image_9 from '../assets/greenquestclub/Yaba/GREENQUEST46.jpg';
import slide_image_10 from '../assets/greenquestclub/street2schools/street2schools10.jpg';
import slide_image_11 from '../assets/greenquestclub/Yaba/GREENQUEST62.jpg';
import slide_image_12 from '../assets/greenquestclub/Yaba/GREENQUEST52.jpg';
import slide_image_13 from '../assets/greenquestclub/street2schools/street2schools13.jpg';
import slide_image_14 from '../assets/greenquestclub/street2schools/street2schools14.jpg';

const Slider = () => {
    return (
    <div className="relative w-full">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        autoplay={{
          delay: 3000, // 3 seconds delay between slides
          disableOnInteraction: false, // Autoplay continues after user interacts with the slider
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1440: {
            slidesPerView: 4,
          },
        }}
        modules={[EffectCoverflow, Pagination, Autoplay]} // Include Autoplay module
        className="swiper_container mt-12"
      >
        <SwiperSlide>
          <img src={slide_image_1} alt="slide_image_1" className="w-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_2} alt="slide_image_2" className="w-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_3} alt="slide_image_3" className="w-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_4} alt="slide_image_4" className="w-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_5} alt="slide_image_5" className="w-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_6} alt="slide_image_6" className="w-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_7} alt="slide_image_7" className="w-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_8} alt="slide_image_8" className="w-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_9} alt="slide_image_9" className="w-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_10} alt="slide_image_10" className="w-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_11} alt="slide_image_11" className="w-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_12} alt="slide_image_12" className="w-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_13} alt="slide_image_13" className="w-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_14} alt="slide_image_14" className="w-full object-cover" />
        </SwiperSlide>

      </Swiper>
    </div>
  );
}

export default Slider;
