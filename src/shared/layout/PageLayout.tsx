import React from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import styled from 'styled-components';

const PageLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <Container>
      <Header/>
      <Main>
         {children}
      </Main>
      <Footer/>
    </Container>
  )
}

const Container = styled.div`
  display:flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.div`
  flex: 1;
`;

export default PageLayout

