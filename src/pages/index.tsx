import Head from 'next/head';
import { Inter } from 'next/font/google';
import { Container } from '../shared/styles/styles';
import "swiper/swiper-bundle.css";
import Carousel from '../shared/components/Carousel';



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
      <Head>
        <title>Omar Donato Bassani</title>
        <meta name="description" content="Site de escola estadual Omar Donato Bassani" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <header>
         <h1>E.E Omar Donato Bassani</h1>
        </header>
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
