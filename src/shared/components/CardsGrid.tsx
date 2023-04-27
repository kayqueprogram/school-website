import React from 'react';
import styled from 'styled-components';
import BlogCard from './BlogCard';

const CardsGrid = () => {
  return (
    <div>
      <Grid>
        <BlogCard
          title='A taxa de inadimplência de empréstimos estudantis é importante'
          description='Tomar a decisão de fazer algo – este é o primeiro passo. Nós todos sabemos que nada decisão.'
          href='/'
        />
                <BlogCard
          title='A taxa de inadimplência de empréstimos estudantis é importante'
          description='Tomar a decisão de fazer algo – este é o primeiro passo. Nós todos sabemos que nada decisão.'
          href='/'
        />
                <BlogCard
          title='A taxa de inadimplência de empréstimos estudantis é importante'
          description='Tomar a decisão de fazer algo – este é o primeiro passo. Nós todos sabemos que nada decisão.'
          href='/'
        />
                <BlogCard
          title='A taxa de inadimplência de empréstimos estudantis é importante'
          description='Tomar a decisão de fazer algo – este é o primeiro passo. Nós todos sabemos que nada decisão.'
          href='/'
        />
                <BlogCard
          title='A taxa de inadimplência de empréstimos estudantis é importante'
          description='Tomar a decisão de fazer algo – este é o primeiro passo. Nós todos sabemos que nada decisão.'
          href='/'
        />
                <BlogCard
          title='A taxa de inadimplência de empréstimos estudantis é importante'
          description='Tomar a decisão de fazer algo – este é o primeiro passo. Nós todos sabemos que nada decisão.'
          href='/'
        />
                <BlogCard
          title='A taxa de inadimplência de empréstimos estudantis é importante'
          description='Tomar a decisão de fazer algo – este é o primeiro passo. Nós todos sabemos que nada decisão.'
          href='/'
        />
      </Grid>
    </div>
  )
}


const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(20rem,34rem));
  justify-items: center;
  gap: 2vw;
`;

export default CardsGrid;
