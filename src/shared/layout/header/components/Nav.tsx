import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import ActiveLink from '@/shared/components/ActiveLink';

const Nav = () => {

  return (
     <NavList>
       <ActiveLink href={"/"}>Início</ActiveLink>
       <ActiveLink href={"/about"}>Sobre nós</ActiveLink>
       <ActiveLink href={"/"}>Eventos</ActiveLink>
       <ActiveLink href={"/services"}>Blog</ActiveLink>
       <ActiveLink href={"/equipe"}>Galeria</ActiveLink>
       <ActiveLink href={"/services"}>Entre em Contato</ActiveLink>
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
