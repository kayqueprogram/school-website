import {createGlobalStyle} from 'styled-components';
import { device } from './breakPoints';

const GlobalPageStyle = createGlobalStyle`
 *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
 }

 html{
    font-size: 62.5%;
 }

 body{
   font-size: 1.6rem;
  }

 @media ${device.md}{
  html{
    font-size: 48%;
  }
 }

`;

export default GlobalPageStyle;