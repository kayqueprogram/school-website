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

/// não usei uma props como images = [{...}] 
// me manda te mandar um audio explicando o motivo se estiver lendo 
// provavelmente n vou lembrar de mandar o audio então se estiver lendo 
// me lembre :)

const Slide = ({children,swiperConfigs}:ISwiperProps) => {
  return (
    <>
      <Swiper
       {...swiperConfigs}
      >
        {children}
      </Swiper>
    </>
  );
};

export default Slide;

