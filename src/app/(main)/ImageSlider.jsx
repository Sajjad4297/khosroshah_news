'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import "./Home.css"

export default function ImageSlider({ slides }) {
  return (
    <Swiper
      modules={[Navigation]}
      navigation
      spaceBetween={30}
      slidesPerView={1}
      loop={true}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="relative">
            <Image src={slide.img} width={600} height={400} alt={slide.title} className='relative-img' />
            <h3 className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white p-2 rounded">
              {slide.title}
            </h3>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
