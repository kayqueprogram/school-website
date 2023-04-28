import React from 'react';
import styled from 'styled-components';
import { IconType } from 'react-icons/lib';
import Row from './Row';
import Column from './Column';
import Span from './Span';
import { title } from 'process';
import Paragraph from './Paragraph';

type Props = {
  Icon:IconType,
  title:string,
  info:string
}

const InfoCard = ({Icon,title,info}:Props) => {
  return (
    <Container>
      <Row alignItems='center' gap='3rem'>
        {Icon && <Icon fontSize='4em'/>}
        <Column gap='2px'>
          {title && (
           <Span fontSize='2rem' fontWeight='600'>
            {title}
          </Span>)
          }
          {
            info && (
              <Paragraph>
                {info}
              </Paragraph>
            )
          }
        </Column>
      </Row>
    </Container>
  )
}

const Container = styled.div`
 padding: 2.8rem 0px;
 border-bottom: 1px solid #80808091;
`;



export default InfoCard
