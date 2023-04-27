import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import Image, { StaticImageData } from 'next/image';
import WideWrapping from './WideWrapping';
import Title from './Title';
import StylizedButton from './StylizedButton';
import Paragraph from './Paragraph';
import Column from './Column';
import { device } from '../styles/breakPoints';


type Props = {
  src?:string,
  title?:string,
  info?:string,
}

const Banner = ({src,title,info}:Props) => {
  return(
    <Container>
      <BannerImage src={src} alt="banner" />
      <WideWrapping>
       <TextField>
          <Column gap='18px'>
           <Title isLightColor={true}>
            {title}
           </Title>
           <Paragraph>
             {info}
           </Paragraph>
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
 height: 55rem;
 background-color: #0000006e;

 @media ${device.md} {
  height:30rem;
 }
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



export default Banner
