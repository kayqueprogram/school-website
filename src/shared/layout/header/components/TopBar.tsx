import React from 'react';
import styled from 'styled-components';
import Row from '@/shared/components/Row';
import PageIcons from '@/shared/utils/PageIcons';
import WideWrapping from '@/shared/components/WideWrapping';
import Span from '@/shared/components/Span';

const TopBar = () => {
  return (
    <Container>
      <WideWrapping>
       <Row justifyContent='space-between'>
         <Row gap='1.6rem'>
          <Row alignItems='center'>
             <PageIcons.Email fontSize='1.1em'/>
             <Span>Email: emailHere</Span>
          </Row>
          <Row alignItems='center'>
             <PageIcons.Phone fontSize='1.1em'/>
             <Span>Telefone: telefoneHere</Span>
          </Row>
         </Row>
         <Row gap='1.6rem'>
          <Row alignItems='center'>
             <PageIcons.Time fontSize='1.1em'/>
             <Span>Abre: 8:00am - 19:00pm</Span>
          </Row>
         </Row>
       </Row>
      </WideWrapping>
    </Container>
  )
}

const Container = styled.div`
  padding: 14px;
  background-color:${({theme})=> theme.colors.details.primary.dark};
  color: white;
  font-size: 14px;
`;

export default TopBar
