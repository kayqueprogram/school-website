import React from 'react';
import WideWrapping from './WideWrapping';
import styled from 'styled-components';
import Title from './Title';
import Span from './Span';
import Column from './Column';


type Props = {
  children: React.ReactNode;
  title?:string;
  subTitle?:string;
  topic?:string;
  backgroundColor?:string;
  isRelative?:boolean;
}

const SectionContainer = ({children,title,subTitle,topic,isRelative,backgroundColor}:Props) => {
  return (
    <Container backgroundColor={backgroundColor} isRelative={isRelative}>
      <WideWrapping>
        {
          title && (
           <Header>
             <Column alignItems='center' gap='1.4rem'>
               <Title>{title}</Title>
                {subTitle && (
                <Span fontSize='2.1rem'>
                 {subTitle}
                </Span>
                )
                } 
              </Column>
           </Header>
          )
        }
        {children}
      </WideWrapping>
    </Container>
  )
}

const Container = styled.section<{backgroundColor?:string,isRelative?:boolean}>`
 width: 100%;
 position: ${({isRelative})=>isRelative?'relative':'static'};
 padding: 6rem 0px;
 background-color: ${({backgroundColor})=>backgroundColor || 'transparent'};
`;

const Header = styled.div`
 display: flex;
 flex-direction:column;
 align-items: center;
 text-align: center;
 margin-bottom: 8rem;
`;

const Topic = styled.span`
 font-size: 2rem;
 font-weight: 800;
 color: ${({theme})=> theme.colors.primary};
`;

export default SectionContainer;