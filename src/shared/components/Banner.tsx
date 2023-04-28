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
  buttonLink?:string
  buttonLabel?:string
}

const Banner = ({src,title,info,buttonLink,buttonLabel}:Props) => {
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
           {
            (buttonLink && buttonLabel) && (
              <StylizedButton href={buttonLink}>
                {buttonLabel}
              </StylizedButton>
            )
           }
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
 min-height: 60rem;
 background-color:${({theme})=>theme.colors.details.primary.littleOpacity};

 @media ${device.md} {
  min-height:30rem;
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
  padding: 20px 0px;
  color: white;

`;



export default Banner
