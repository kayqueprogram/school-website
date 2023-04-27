import React from 'react';
import styled from 'styled-components';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper} from 'swiper/react';

import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, Pagination]);

interface ISwiperProps {
  swiperConfigs?:{}
  children:React.ReactNode

}

const Slide = ({children,swiperConfigs}:ISwiperProps) => {
  return (
    <>
      <Swiper
       slidesPerView={4}//add auto aq e adc width 100% no swiper
       spaceBetween={30}
      >
        {children}
      </Swiper>
    </>
  );
};

export default Slide;

