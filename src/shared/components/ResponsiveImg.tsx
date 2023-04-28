import React from 'react'
import styled from 'styled-components'
 

const ResponsiveImg = ({src}:{src:string}) => {
  return (
    <Container src={src} />
  )
}

const Container = styled.img<{src:string}>`
 max-width: 100%;
 max-height:55rem;
 border-radius:${({theme})=>theme.measures.border_radius};
 object-fit: cover;
`;


export default ResponsiveImg
