import React from 'react';
import styled from 'styled-components';
import Row from '@/shared/components/Row';
import PageIcons from '@/shared/utils/PageIcons';
import WideWrapping from '@/shared/components/WideWrapping';
import Span from '@/shared/components/Span';
import { device } from '@/shared/styles/breakPoints';


const TopBar = () => {
  return (
    <Container>
      <WideWrapping>
       <Row justifyContent='space-between'>
         <Row gap='1.6rem'>
          <Row alignItems='center'>
             <PageIcons.Email fontSize='1.2em'/>
             <Span>Email: coordenacaobassani2022@gmail.com</Span>
          </Row>
          <Row alignItems='center'>
             <PageIcons.Phone fontSize='1.2em'/>
             <Span>Tel: +55 11 4354-7192</Span>
          </Row>
         </Row>
         <Row gap='1.6rem'>
          <Row alignItems='center'>
             <PageIcons.Time fontSize='1.3em'/>
             <Span>Abre: 6:50am-22:00pm</Span>
          </Row>
         </Row>
       </Row>
      </WideWrapping>
    </Container>
  )
}

const Container = styled.div`
  padding: 1.4rem;
  font-size: 1.3rem;

  @media ${device.xs}{
    font-size: 1rem;
  }

`;

export default TopBar
