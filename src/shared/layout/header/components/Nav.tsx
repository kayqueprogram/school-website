import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import ActiveLink from '@/shared/components/ActiveLink';

const Nav = () => {

  return (
     <NavList>
       <ActiveLink href={"/"}>Início</ActiveLink>
       <ActiveLink href={"/sobre"}>Sobre nós</ActiveLink>
       <ActiveLink href={"/blog"}>Blog</ActiveLink>
       <ActiveLink href={"/galeria"}>Galeria</ActiveLink>
     </NavList>
  )
}



const NavList = styled.ul`
  display: flex;
  font-size: 1.68rem;

 &>*:not(:first-child){
  margin-left: 5rem;
 }
`;


export default Nav;
