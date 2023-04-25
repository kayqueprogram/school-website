import React from 'react';
import styled from 'styled-components';
import Span from './Span';
import StylizedButton from './StylizedButton';
import Column from './Column';
import Paragraph from './Paragraph';
import Link from 'next/link';
import pageTheme from '../styles/pageTheme';

type Props = {
    title:string,
    description:string,
    src:string,
    href:string
}

const BlogCard = ({title,description,href}:Props) => {
  return (
    <Container>
      <LinkContainer href="/">
        <Column>
         <Image src='https://s30383.pcdn.co/wp-content/uploads/2020/12/topic-faculty-active-engaged-students-1.png'/>
         {title && <Span fontSize='1.8rem' fontWeight={600} color={pageTheme.colors.details.primary}>{title}</Span>}
         {description && <Paragraph>{description}</Paragraph>}
        </Column>
      </LinkContainer>
    </Container>
  )
}

const Container = styled.div`
 width: 100%;
`;

const LinkContainer = styled(Link)`
  text-decoration: none;
  color: currentColor;
  cursor: pointer;
`;

const Image = styled.img`
 width: 100%;
 max-height: 240px;
 border-radius: ${({theme})=>theme.measures.border_radius};
 object-fit: cover;
`;

export default BlogCard
