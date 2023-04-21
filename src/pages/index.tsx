import "swiper/swiper-bundle.css";
import PageLayout from '@/shared/layout/PageLayout';
import Carousel from '@/shared/components/Carousel';
import BannerCarousel from '@/shared/components/BannerCarousel';


export default function Home() {

  return (
    <PageLayout>
       <BannerCarousel/>
    </PageLayout>
  )
}
