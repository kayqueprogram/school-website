import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
`;

export const Logo = styled.img`
  height: 50px;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
`;

export const NavLink = styled.a`
  margin: 0 1rem;
  font-size: 1.2rem;
  text-decoration: none;
  color: #333333;

  &:hover {
    color: #f0a500;
  }
`;
