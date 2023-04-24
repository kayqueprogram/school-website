import React from 'react';
import styled from 'styled-components';

const StylizedButton = ({children}:{children:React.ReactNode}) => {
  return (
    <Container>
      {children}
    </Container>
  )
}

const Container = styled.button`
  padding:1rem 4rem;
  font-size: 1.5rem;
  font-weight: 600;
  text-transform: capitalize;
  cursor: pointer;
`;

export default StylizedButton
