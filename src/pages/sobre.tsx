import BannerCarousel from "@/shared/components/Banner";
import Paragraph from "@/shared/components/Paragraph";
import RowToColumn from "@/shared/components/RowToColumn";
import SectionContainer from "@/shared/components/SectionContainer";
import PageLayout from "@/shared/layout/PageLayout";
import React from "react";

const About = () => {
  return (
    <PageLayout>
      <BannerCarousel />
       <SectionContainer>
       <RowToColumn>
       <Paragraph>
         Bem-vindo à Escola Omar Donato Bassani! Somos uma instituição educacional de primeira linha que se esforça para fornecer uma experiência educacional completa e enriquecedora aos nossos alunos. Nossa escola leva o nome de Omar Donato Bassani, um distinto educador com mais de duas décadas de experiência no campo da educação.

         Nossa escola está empenhada em fornecer uma educação de alta qualidade aos nossos alunos, que enfatiza a excelência acadêmica, o desenvolvimento do caráter e o envolvimento da comunidade. Acreditamos que a educação é a chave para abrir um futuro melhor para nossos alunos e estamos comprometidos em fornecer a eles as ferramentas e os recursos de que precisam para ter sucesso.

         Na Escola Omar Donato Bassani, oferecemos uma ampla variedade de programas acadêmicos, incluindo um currículo rigoroso, elaborado para desafiar nossos alunos e prepará-los para a faculdade e para o sucesso profissional. Também oferecemos uma variedade de atividades extracurriculares que ajudam nossos alunos a desenvolver habilidades importantes para a vida, como liderança, trabalho em equipe e resolução de problemas.

         Nosso corpo docente é composto por educadores altamente qualificados, apaixonados pelo ensino e dedicados a ajudar nossos alunos a atingir seu pleno potencial. Temos orgulho de nossa comunidade diversificada de alunos e estamos comprometidos em promover um ambiente de aprendizado seguro e inclusivo, onde todos os alunos se sintam valorizados, respeitados e apoiados.

         Convidamos você a explorar nosso site para saber mais sobre nossa escola e os programas que oferecemos. Caso tenha alguma dúvida ou pretenda agendar uma visita, não hesite em contactar-nos. Estamos ansiosos para fazer parceria com você para ajudar seu filho a alcançar o sucesso acadêmico e pessoal!
         </Paragraph>
         <div></div>
      </RowToColumn>
       </SectionContainer>
    </PageLayout>
  );
};

export default About;
