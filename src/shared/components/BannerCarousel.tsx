import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const images = [
  "https://cdn.discordapp.com/attachments/1098057370728403115/1099085209292525649/IMG-20230421-WA0027.jpg",
  "https://cdn.discordapp.com/attachments/1098057370728403115/1099085209556746300/IMG-20230421-WA0028.jpg",
  "https://cdn.discordapp.com/attachments/1098057370728403115/1099085384249507882/IMG-20230421-WA0030.jpg"
];

const BannerCarousel = () => {
  const sliderRef = useRef<Slider>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
        sliderRef.current.slickGoTo(newIndex);
        setCurrentIndex(newIndex);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: false,
    speed: 1000,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current: number, next: number) => setCurrentIndex(next),
  };

  return (
    <Container>
      <StyledSlider {...settings} ref={sliderRef}>
        {images.map((src, index) => (
          <Image key={index} src={src} alt="" />
        ))}
      </StyledSlider>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
`;

const StyledSlider = styled(Slider)`
  .slick-slide > div {
    outline: none;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 400px;
  max-height: 900px;
  object-fit: cover;

  @media screen and (max-width: 760px) {
    height: 500px;
  }

  @media screen and (max-width: 480px) {
    height: 300px;
  }
`;


export default BannerCarousel;
