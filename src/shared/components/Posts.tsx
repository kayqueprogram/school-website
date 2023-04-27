import React,{useEffect,useState} from 'react';
import { collection,getDocs } from 'firebase/firestore';
import BlogCard from './BlogCard';
import { db } from '../../../firebase/firebase-config';
import Slide from './Slide';
import { SwiperSlide } from 'swiper/react';



const Posts = () => {
    const [posts,setPosts] = useState<Array<{}>>([]);
    const postsCollectionRef = collection(db,"posts");
    
    

    useEffect(()=>{
        const fetch = async() =>{    
           const data = (await getDocs(postsCollectionRef));
           setPosts(data.docs?.map((doc)=> ({...doc.data(),id:doc.id})))
        }

        fetch()
    },[]);

    console.log(posts)

  return (
    <Slide>
       {
        posts.map(post => (<SwiperSlide key={post.id}>
          <BlogCard
           {...post}
          />
        </SwiperSlide>))
       }
    </Slide>
  )
}

export default Posts
