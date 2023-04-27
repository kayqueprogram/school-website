import React from 'react';
import PageLayout from '@/shared/layout/PageLayout';
import Banner from '@/shared/components/Banner';
import SectionContainer from '@/shared/components/SectionContainer';
import CardsGrid from '@/shared/components/CardsGrid';
import Posts from '@/shared/components/Posts';


const blog = () => {
  return (
    <PageLayout>
      <Banner
        src='https://images.pexels.com/photos/1516440/pexels-photo-1516440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        title='"O poder de compartilhar conhecimento: como ajudar os outros pode desbloquear um potencial ilimitado"'
        info=''
      />
      <SectionContainer
       title='Fique por dentro das Novidades'
      >
        <Posts/>
      </SectionContainer>
    </PageLayout>
  )
}

export default blog
