import React from 'react';
import styled from 'styled-components';

type Props = {
  children:React.ReactNode;
  maxWidth?:string;
  alignItems?:'stretch'|'flex-start'|'flex-end'|'baseline'|'center';
  color?:string
  gap?:string;
}

const Column = ({children,...styleProps}:Props) => {
  return (
    <Container {...styleProps}>
      {children}
    </Container>
  )
}

const Container = styled.div<Omit<Props,'children'>>`
  max-width: ${({maxWidth})=> maxWidth || 'none'};
  display: flex;
  flex-direction: column;
  align-items:${({alignItems})=>alignItems || 'flex-start'};
  color: ${({color})=>color?color:'currentColor'};

  &>*:not(:first-child){
    margin-top:${({gap})=>gap || '1rem'};
  }
`;

export default Column