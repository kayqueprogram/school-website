import React from 'react';
import styled from 'styled-components';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, Pagination]);

interface CarouselProps {
  images: string[];
}

const StyledSwiper = styled(Swiper)`
  width: 100%;
  max-width: 800px; 
  margin: 0 auto;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
`

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  return (
    <StyledSwiper
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
    >
      {images.map((imageUrl, index) => (
        <SwiperSlide key={index} >
          <Image src={imageUrl} alt={`Slide ${index}`} />
        </SwiperSlide>
      ))}
    </StyledSwiper>
  );
};

export default Carousel;
