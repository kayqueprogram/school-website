import React from 'react'
import styled from 'styled-components'

const Image = styled.img`
  width: 57px;
  border-radius: 50px;
`

const Logo = () => {
  return (
    <div>
      <Image src="logo.png" alt="" />
    </div>
  )
}


export default Logo
