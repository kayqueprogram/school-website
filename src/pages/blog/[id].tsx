import React,{useState,useEffect} from 'react';
import {useRouter} from 'next/router';
import SectionContainer from '@/shared/components/SectionContainer';
import PageLayout from '@/shared/layout/PageLayout';
import { db } from '../../../firebase/firebase-config';
import {doc} from 'firebase/firestore'
import Banner from '@/shared/components/Banner';


const Post = () => {
  const [post,setPost] = useState({})
  const router = useRouter();
  const { id } = router.query;




  return (
    <PageLayout>
      {
        post && (
         <SectionContainer>
          <Banner
           src={post.id}
          />
         </SectionContainer>
        )
      }
    </PageLayout>
  )
}

export default Post;
