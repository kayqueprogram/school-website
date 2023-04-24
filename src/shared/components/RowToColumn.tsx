import React from 'react';
import styled from 'styled-components';
import { device } from '@/shared/styles/breakPoints';

type Props = {
  children:React.ReactNode;
  columnInvertComp?:boolean;
}

const RowToColumn = ({children,...styleProps}:Props) => {
  return (
    <Container {...styleProps}>
      {children}
    </Container>
  )
}

const Container = styled.div<Omit<Props,'children'>>`
  display: flex;
  align-items: center;

  &>*{
    width: 50%;
  }

  &>*:not(:first-child){
   margin-left: 5rem;
  }

  @media (${device.md}) {
    flex-direction:column;

    &>*{
    width: 100%;
   }

   &>*:not(:first-child){
   margin-left: 0;
   margin-top:${({columnInvertComp})=>columnInvertComp?0:'10px'};
   margin-bottom :${({columnInvertComp})=>columnInvertComp?'18px':0};
   order: ${({columnInvertComp})=>columnInvertComp?-1:0};
  }

  }
`;

export default RowToColumn;
