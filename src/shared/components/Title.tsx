import React from 'react';
import styled from 'styled-components';

const Title = ({children}:{children:React.ReactNode}) => {
  return (
    <Container>
      {children}
    </Container>
  )
}

const Container = styled.h1`
  max-width: 86%;
  font-size: 3.9rem;
  font-size: clamp(1em, 1.6em + 1.5vw, 2.8em);
`;

export default Title
