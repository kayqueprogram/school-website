import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  background-color: #f5f5f5;
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Footer = () => {
  return (
    <StyledFooter>
        <p>Coded by: <a href="https://github.com/LaraGb" target='_blank'>Homo</a> and <a href="https://shadowcoder.vercel.app/" target='_blank'>ShadowCoder</a></p> <br/>
      <p>&copy; 2023 - Todos os direitos reservados.</p>
    </StyledFooter>
  );
};

export default Footer;
