import "swiper/swiper-bundle.css";
import PageLayout from '@/shared/layout/PageLayout';
import BannerCarousel from '@/shared/components/BannerCarousel';
import SectionContainer from "@/shared/components/SectionContainer";
import Column from "@/shared/components/Column";
import Title from "@/shared/components/Title";
import RowToColumn from "@/shared/components/RowToColumn";
import Paragraph from "@/shared/components/Paragraph";
import Row from "@/shared/components/Row";
import pageTheme from "@/shared/styles/pageTheme";
import InfoCard from "@/shared/components/InfoCard";
import Span from "@/shared/components/Span";
import PageIcons from "@/shared/utils/PageIcons";

export default function Home() {

  return (
    <PageLayout>
      <BannerCarousel/>
      <SectionContainer>
        <RowToColumn>
          <Column>
            <Column>
              <Title>
                Personal Education, Extraordinary Success
              </Title>
              <Paragraph>
               Bem-vindo à Escola Omar Donato Bassani, um lugar onde os alunos prosperam academicamente, pessoalmente e socialmente. Nossa escola se dedica a fornecer um ambiente inclusivo e de apoio que capacita os alunos a perseguir suas paixões e alcançar seus objetivos.
              </Paragraph>
              <Paragraph>
                oferecemos um programa acadêmico abrangente e rigoroso que prepara os alunos para o sucesso na faculdade e além. Nosso currículo é projetado para desafiar os alunos, fornecendo-lhes as habilidades e conhecimentos de que precisam para se destacar em um mundo em rápida mudança. 
              </Paragraph>
            </Column>
          </Column>
        </RowToColumn>
      </SectionContainer>
      <SectionContainer
       backgroundColor={pageTheme.colors.details.primary}
      >
        <RowToColumn>
          <div>

          </div>
           <Column color={pageTheme.colors.text.secondary.light} gap="4rem">
             <div>
               <Title isLightColor={true}>Why Choose Us</Title>
               <Span>
                  Let success motivate you. Find a picture of what epitomizes success to you and then pull it out when you are in need of motivation.
                </Span>
             </div>
              <div>
                <InfoCard 
                  Icon={PageIcons.Brain}
                  title="Forte Programa Acadêmico:"
                  info="Programa acadêmico rigoroso e abrangente é um componente essencial de qualquer grande escola. Um programa acadêmico forte é aquele que desafia os alunos ao mesmo tempo em que lhes fornece as habilidades e o conhecimento de que precisam para ter sucesso na faculdade e além."
                />
                <InfoCard 
                  Icon={PageIcons.Smart}
                  title="Ambiente de suporte e inclusivo:"
                  info="Um ambiente escolar de suporte e inclusivo é crucial para que os alunos prosperem academicamente, pessoalmente e socialmente."
                />
                <InfoCard 
                  Icon={PageIcons.Sport}
                  title="Oportunidades extracurriculares:"
                  info="A educação vai além da sala de aula, e nossa escola está empenhada em oferecer uma ampla gama de oportunidades extracurriculares para ajudar os alunos a desenvolver habilidades"
                />
              </div>
           </Column>
        </RowToColumn>
      </SectionContainer>
      <SectionContainer
       title="Ùltimos Eventos"
      >
          
      </SectionContainer>
      <SectionContainer
       title="Ùltimos Artigos"
      >

      </SectionContainer>

    </PageLayout>
  )
}
