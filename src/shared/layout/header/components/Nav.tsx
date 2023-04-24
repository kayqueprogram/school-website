import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import ActiveLink from '@/shared/components/ActiveLink';

const Nav = () => {

  return (
     <NavList>
       <ActiveLink href={"/"}>Início</ActiveLink>
       <ActiveLink href={"/equipe"}>Sobre nós</ActiveLink>
       <ActiveLink href={"/about"}>Pages</ActiveLink>
       <ActiveLink href={"/services"}>Cursos</ActiveLink>
       <ActiveLink href={"/equipe"}>Eventos</ActiveLink>
       <ActiveLink href={"/services"}>Blog</ActiveLink>
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
