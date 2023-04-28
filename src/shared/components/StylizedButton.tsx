import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const StylizedButton = ({children,href}:{children:React.ReactNode,href?:string}) => {
  return (
    <Container>
      {
        href?<Link href={href}>{children}</Link>:children
      }
    </Container>
  )
}

const Container = styled.button`
  padding:1rem 4rem;
  outline: none;
  border: none;
  font-size: 1.5rem;
  font-weight: 600;
  border-radius: ${({theme})=>theme.measures.border_radius};
  text-transform: capitalize;
  cursor: pointer;
`;

export default StylizedButton
