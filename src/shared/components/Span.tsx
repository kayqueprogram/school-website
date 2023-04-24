import React from 'react';
import styled from 'styled-components';

type Props = {
    children:React.ReactNode,
    fontSize?:string,
    fontWeight?:string
}

const Span = ({children,...styleProps}:Props) => {
  return (
    <Container {...styleProps}>
      {children}
    </Container>
  )
}

const Container = styled.span<Omit<Props,'children'>>`
 font-size: ${({fontSize})=>fontSize || '1em'};
 font-weight: ${({fontWeight})=>fontWeight || 'normal'};
 color: currentColor;
`;

export default Span;
