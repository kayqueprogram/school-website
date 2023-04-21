import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import ActiveLink from '@/shared/components/ActiveLink';

const Nav = () => {

  return (
    <Container>
     <NavList>
       <ActiveLink href={"/"}>Início</ActiveLink>
       <ActiveLink href={"/about"}>About</ActiveLink>
       <ActiveLink href={"/services"}>Serviços</ActiveLink>
       <ActiveLink href={"/equipe"}>Equipe</ActiveLink>
       
     </NavList>
    </Container>
  )
}
// <ActiveLink href={"/depoimentos"}>Depoimentos</ActiveLink>
const Container = styled.div`

`;

const NavList = styled.ul`
  display: flex;
  font-size: 1.68rem;

 &>*:not(:first-child){
  margin-left: 5rem;
 }
`;


export default Nav;
