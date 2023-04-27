import React,{useState,useEffect} from 'react';
import {useRouter} from 'next/router';
import SectionContainer from '@/shared/components/SectionContainer';
import PageLayout from '@/shared/layout/PageLayout';
import { db } from '../../../firebase/firebase-config';
import { doc,getDoc} from "firebase/firestore";
import Banner from '@/shared/components/Banner';
import Title from '@/shared/components/Title';
import Column from '@/shared/components/Column';
import Span from '@/shared/components/Span';
import Paragraph from '@/shared/components/Paragraph';

const Post = () => {
  const [post,setPost] = useState({})
  const router = useRouter();
  const id:any = router.query.id;
  const _id:string = typeof id === 'string'?id:'';

 
   useEffect(()=>{
     const getPost = async() =>{
      if(_id){
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
            //aqui na verdade vc lida com erro e/ou renderiza um componente de erro/alternativo.
          }
        })
        .catch((error) => {
          console.log("Erro ao obter o documento:", error);
            //aqui na verdade vc lida com erro e/ou renderiza um componente de erro/alternativo.
        });
      }
     }
     getPost()
  
   },[_id])

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

/*
  if(id){
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
*/

export default Post;
