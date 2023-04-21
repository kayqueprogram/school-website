import React from 'react';
import styled from 'styled-components';
import { SwiperSlide } from 'swiper/react';
import Slide from './Slide';

const images = [
  "https://cdn.discordapp.com/attachments/1098057370728403115/1099085209292525649/IMG-20230421-WA0027.jpg",
  "https://cdn.discordapp.com/attachments/1098057370728403115/1099085209556746300/IMG-20230421-WA0028.jpg",
  "https://cdn.discordapp.com/attachments/1098057370728403115/1099085384249507882/IMG-20230421-WA0030.jpg"
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
 height: 400px;
 max-height: 900px;
 object-fit: cover;

 @media screen and (max-width: 760px){
  height: 700px;
 }
`;

export default BannerCarousel
