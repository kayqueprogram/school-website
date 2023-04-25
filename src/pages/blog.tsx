import React from 'react';
import PageLayout from '@/shared/layout/PageLayout';
import Banner from '@/shared/components/Banner';
import SectionContainer from '@/shared/components/SectionContainer';
import CardsGrid from '@/shared/components/CardsGrid';


const blog = () => {
  return (
    <PageLayout>
      <Banner/>
      <SectionContainer
       title='Fique por dentro das Novidades'
      >
        <CardsGrid/>
      </SectionContainer>
    </PageLayout>
  )
}

export default blog
