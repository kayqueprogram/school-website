import React from 'react';
import pageTheme from "@/shared/styles/pageTheme";
import styled from 'styled-components';

function BlogCard ({src, title, description}: {src?: string, title: string, description?: string}) {
    return (
       <Card>
            <Title>{title}</Title>
            <Text>{description}</Text>
            <Image src={src}/>
            <ButtonBlog>Veja mais</ButtonBlog>
        
       </Card>
    )
}

const Card = styled.div`
    width: 350px;
    position: relative;
    padding: 20px;
    border-radius: 5px;
    background-color: ${({theme})=>theme.colors.details.primary};
    color: white;
`

const Image = styled.img`
    width: 100%;
    border-radius: 10px;
`

const Title = styled.h1`
    font-size: 2.7rem;
    margin: 12px;
`

const Text = styled.p`
    margin 5px 15px;
`

const ButtonBlog = styled.button`
    display: block;
    margin: 9px;
    cursor: pointer;
    padding: 6px;
`

export default BlogCard