import "swiper/swiper-bundle.css";
import PageLayout from "@/shared/layout/PageLayout";
import Banner from "@/shared/components/Banner";
import SectionContainer from "@/shared/components/SectionContainer";
import Column from "@/shared/components/Column";
import Title from "@/shared/components/Title";
import RowToColumn from "@/shared/components/RowToColumn";
import Paragraph from "@/shared/components/Paragraph";
import pageTheme from "@/shared/styles/pageTheme";
import InfoCard from "@/shared/components/InfoCard";
import Span from "@/shared/components/Span";
import PageIcons from "@/shared/utils/PageIcons";
import Posts from "@/shared/components/Posts";
import ResponsiveImg from "@/shared/components/ResponsiveImg";
import Footer from '@/shared/layout/footer/Footer'

export default function Home() {

  return (
    <PageLayout>
      <Banner 
       src="https://images.pexels.com/photos/5538594/pexels-photo-5538594.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
       title="Fortalecendo Mentes, Inspirando Futuros"
       info="A educação é a base do progresso da sociedade. Ele equipa os indivíduos com as habilidades e conhecimentos necessários, para ter sucesso em sua vida pessoal e profissional, contribuindo assim com melhoria para sua comunidade."
      />
      <SectionContainer>
        <RowToColumn>
            <Column>
              <Title>Educação Transforma</Title>
              <Paragraph>
                Bem-vindo à Escola Omar Donato Bassani, um lugar onde os alunos
                prosperam academicamente, pessoalmente e socialmente. Nossa
                escola se dedica a fornecer um ambiente inclusivo e de apoio que
                capacita os alunos a perseguir seus projetos e alcançar seus
                objetivos.
              </Paragraph>
              <Paragraph>
                oferecemos um programa acadêmico abrangente e rigoroso que
                prepara os alunos para o sucesso na faculdade e além. Nosso
                currículo é projetado para desafiar os alunos, fornecendo-lhes
                as habilidades e conhecimentos de que precisam para se destacar
                em um mundo de grandes transformações.
              </Paragraph>
            </Column>
            <ResponsiveImg src="logo.png"/>
        </RowToColumn>
      </SectionContainer>
      <SectionContainer backgroundColor={pageTheme.colors.details.primary.dark}>
        <RowToColumn>
          <ResponsiveImg src="student.jpg"/>
          <Column color={pageTheme.colors.text.secondary.light} gap="4rem">
            <div>
              <Title isLightColor={true}>Porque escolher-nos</Title>
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

            </div>
          </Column>
        </RowToColumn>
      </SectionContainer>
      <SectionContainer
       title="Ùltimos Eventos"
      >
          <Posts/>
      </SectionContainer>
      
    </PageLayout>
  );
}
