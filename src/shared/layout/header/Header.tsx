import React from 'react';
import styled from 'styled-components';
import Logo from '@/shared/components/Logo';
import WideWrapping from '@/shared/components/WideWrapping';
import Row from '@/shared/components/Row';
import Nav from './components/Nav';


const Header = () => {
  return (
    <Container>
      <WideWrapping>
        <Row justifyContent='space-between'>
          <Logo/>
          <Nav/>
        </Row>
      </WideWrapping>
    </Container>
  )
}

const Container = styled.div`
 position:sticky;
 top:0;
 z-index:1000;
 width:100%;
 padding: 2.4rem 0px;
 box-shadow:0 1px 8px #80808030;
 background-color: white;
`;


export default Header;

// Tentação de exportar direto, tira isso de mim kkk
