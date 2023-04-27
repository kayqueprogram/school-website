import React from 'react';
import styled from 'styled-components';
import Span from './Span';
import StylizedButton from './StylizedButton';
import Column from './Column';
import Paragraph from './Paragraph';
import Link from 'next/link';
import pageTheme from '../styles/pageTheme';
import wordSplit from '../utils/wordSplit';

type Props = {
    id:string
    title:string,
    content:string,
    image:string,
}

const BlogCard = ({image,title,content,id}:Props) => {
  return (
    <Container>
      <LinkContainer href={"/blog/"+id}>
        <Column>
         <Image src={image}/>
         {title && <Span fontSize='1.6rem' fontWeight={600} color={pageTheme.colors.details.primary.dark}>{wordSplit(title,8)}...</Span>}
         {content && <Paragraph>{wordSplit(content,15)}...</Paragraph>}
        </Column>
      </LinkContainer>
    </Container>
  )
}

const Container = styled.div`
 width: 100%;

 :hover{
  transform: scale(1.01);
 }
`;

const LinkContainer = styled(Link)`
  text-decoration: none;
  color: currentColor;
  cursor: pointer;
`;

const Image = styled.img`
 width: 100%;
 height: 240px;
 border-radius: ${({theme})=>theme.measures.border_radius};
 object-fit: cover;
`;

export default BlogCard
