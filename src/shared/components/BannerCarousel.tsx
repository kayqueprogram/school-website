import React from 'react';
import styled from 'styled-components';
import { SwiperSlide } from 'swiper/react';
import Slide from './Slide';

const images = [
  "https://s3.amazonaws.com/gupy5/production/companies/53134/career/116533/images/2023-01-20_17-16_bannerUrl.png"
];

const BannerCarousel = () => {
  return (
    <Container>
      <Slide>
         {
          images.map((src,index)=><SwiperSlide key={index}><Image src={src} alt="" /></SwiperSlide>)
         }
      </Slide>
    </Container>
  )
}

const Container = styled.div`
 
`;

const Image = styled.img`
 width: 100%;
 max-height:800px;
 object-fit: cover;
`;

export default BannerCarousel
