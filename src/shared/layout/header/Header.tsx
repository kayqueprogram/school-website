import React from 'react';
import styled from 'styled-components';
import Logo from '@/shared/components/Logo';
import WideWrapping from '@/shared/components/WideWrapping';
import Row from '@/shared/components/Row';
import Nav from './components/Nav';
import TopBar from './components/TopBar';
import MainBar from './components/MainBar';


const Header = () => {
  return (
    <div>
      <TopBar/>
      <MainBar/>
    </div>
  )
}




export default Header;

// Tentação de exportar direto, tira isso de mim kkk
