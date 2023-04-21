import { Inter } from 'next/font/google';
import { Container } from '@/shared/styles/styles';
import "swiper/swiper-bundle.css";
import Carousel from '@/shared/components/Carousel';
import Header from '@/shared/components/Header';
import Logo from '../../public/logo.png'


const inter = Inter({ subsets: ['latin'] })


const images = [
  'https://github.com/kayqueprogram/Yuki-onna-discord.js/raw/main/.github/bot-card.png',
  'https://github.com/kayqueprogram/Yuki-onna-discord.js/raw/main/.github/bot-card.png',
  'https://github.com/kayqueprogram/Yuki-onna-discord.js/raw/main/.github/bot-card.png',
  'https://github.com/kayqueprogram/Yuki-onna-discord.js/raw/main/.github/bot-card.png',
];

export default function Home() {

  return (
    <>

      <div>
        <Header src='../../public/logo.png' /> Fiz algo errado neste componente ?
        <Container>
          <div>
            <Carousel images={images} />
          </div>
        </Container>
      </div>
      <footer>footer</footer>

    </>

  )
}
