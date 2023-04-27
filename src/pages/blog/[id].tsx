import React,{useState,useEffect} from 'react';
import {useRouter} from 'next/router';
import SectionContainer from '@/shared/components/SectionContainer';
import PageLayout from '@/shared/layout/PageLayout';
import { db } from '../../../firebase/firebase-config';
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import Banner from '@/shared/components/Banner';
import Title from '@/shared/components/Title';
import Column from '@/shared/components/Column';
import Span from '@/shared/components/Span';
import Paragraph from '@/shared/components/Paragraph';

const Post = () => {
  const [post,setPost] = useState({})
  const router = useRouter();
  const { id } = router.query;
 
  useEffect(() => {
    const docRef = doc(db, "posts", id);
    getDoc(docRef)
      .then((doc) => {
        if (doc.exists()) {
          const data = doc.data();
          setPost({
            title: data.title,
            content: data.content,
            date: data.date,
            image: data.image,
            author: data.author
          });
        } else {
          console.log("Documento não encontrado!");
        }
      })
      .catch((error) => {
        console.log("Erro ao obter o documento:", error);
      });
  }, [id]);

 console.log(post)

  return (
    <PageLayout>
      {
        post && (
         <SectionContainer>
           <Banner
            src={post.image}
           />
          <Column>
           <Span>Omar Donato Bassani</Span>
           <Title>{post.title}</Title>
           <Paragraph>
             {post.content}
           </Paragraph>
          </Column>
         </SectionContainer>
        )
      }
    </PageLayout>
  )
}

export default Post;
