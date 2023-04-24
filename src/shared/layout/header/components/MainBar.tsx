import Row from '@/shared/components/Row';
import WideWrapping from '@/shared/components/WideWrapping';
import { Logo } from '@/shared/styles/Header';
import React from 'react';
import styled from 'styled-components';
import Nav from './Nav';
import SearchField from './SearchField';


const MainBar = () => {
  return (
    <Container>
      <WideWrapping>
        <Row justifyContent='space-between' alignItems='center'>
           <Logo/>
           <Nav/>
           <SearchField/>
        </Row>
      </WideWrapping>
    </Container>
  )
}

const Container = styled.div`
 padding: 1.6rem;
`;

export default MainBar
