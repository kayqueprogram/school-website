import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import Slide from './Slide';
import { SwiperSlide } from 'swiper/react';
import WideWrapping from './WideWrapping';
import Title from './Title';
import StylizedButton from './StylizedButton';
import Paragraph from './Paragraph';
import Column from './Column';

/*const images = [
  "https://cdn.discordapp.com/attachments/1098057370728403115/1099085209292525649/IMG-20230421-WA0027.jpg",
  "https://cdn.discordapp.com/attachments/1098057370728403115/1099085209556746300/IMG-20230421-WA0028.jpg",
  "https://cdn.discordapp.com/attachments/1098057370728403115/1099085384249507882/IMG-20230421-WA0030.jpg"
];*/

const images = [
  'https://img.freepik.com/fotos-gratis/grupo-diverso-de-estudantes-caminhando-na-escola_53876-46937.jpg?w=1060&t=st=1682339963~exp=1682340563~hmac=790a5e6960d07554019ff0f8ca2c0995120ffbd0f25971cdbf732c84881d80f0'
]

const Banner = () => {
  return(
    <Container>
      <BannerImage src={images[0]} alt="banner" />
      <WideWrapping>
       <TextField>
          <Column gap='18px'>
           <Title isLightColor={true}>
            Fortalecendo Mentes, Inspirando Futuros
           </Title>
           <Paragraph>
             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid distinctio, reiciendis nesciunt ipsam beatae quibusdam velit! Accusamus vel at suscipit repellat nam necessitatibus nostrum temporibus.
           </Paragraph>
           <StylizedButton>
             Saiba Mais
           </StylizedButton>
         </Column>
       </TextField>
    </WideWrapping>
  </Container>
  )
}

const Container = styled.div`
 position: relative;
 display: flex;
 align-items: center;
 height: 60rem;
 background-color: #0000006e;
`;

const BannerImage = styled.img`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  object-fit: cover;

`;

const TextField = styled.div`
  max-width: 600px;
  color: white;
`;



export default Banner;
