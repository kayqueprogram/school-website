import React from 'react';
import styled from 'styled-components';

type Props = {
    children:React.ReactNode,
    isLightColor?:boolean
}

const Title = ({children,...styleProps}:Props) => {
  return (
    <Container {...styleProps}>
      {children}
    </Container>
  )
}

const Container = styled.h1<Omit<Props,'children'>>`
  font-size: 4rem;
  color: ${({theme,isLightColor})=>isLightColor?theme.colors.text.primary.light:''};
`;

export default Title
