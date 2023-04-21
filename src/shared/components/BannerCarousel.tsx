import React from 'react';
import styled from 'styled-components';
import { SwiperSlide } from 'swiper/react';
import Slide from './Slide';

const images = [
  "https://imgs.search.brave.com/oIO2kP98ZJJQvKzAp4scO9A6Ygt7RMHKP7ud9ZCWvQg/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9iYW5k/bmV3c2N3Yi5iLWNk/bi5uZXQvYmFuZC93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxOS8w/OS9jb2wlQzMlQTln/aW8tZXN0YWR1YWwu/anBn",
  "https://imgs.search.brave.com/plPpz0Wq2aQuN2_NJoGho3aeB0KkEC9Loux6rTL2aPk/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9vYXR1/YWwuY29tLmJyL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE3LzA1/L2E1ZjJiN2MwY2Qz/NmY2MmRlN2JmNGYw/OGZhYzU4ODRmLmpw/Zw"
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
