import Row from '@/shared/components/Row';
import WideWrapping from '@/shared/components/WideWrapping';
import React from 'react';
import styled from 'styled-components';
import Nav from './Nav';
import Logo from '@/shared/components/Logo';


const MainBar = () => {
  return (
    <Container>
      <WideWrapping>
        <Row justifyContent='space-between' alignItems='center'>
           <Logo/>
           <Nav/>
        </Row>
      </WideWrapping>
    </Container>
  )
}

const Container = styled.div`
 padding: 2.6rem 0rem;
`;

export default MainBar
