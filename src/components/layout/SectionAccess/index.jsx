import {
  Container,
  ContainerTitle,
  SubTitle,
  AreaTitle,
  Title,
  ContainerInfo,
  Gif,
  AreaInfo,
  TitleInfo,
  Description,
  AreaCorrect,
  ContainerMoreInformations,
  AreaInformationsTitle,
  ContainerCta,
  AreaCta,
  DescriptionCta
} from './styles'

import { GiPadlockOpen } from 'react-icons/gi'
import { AiOutlineCheck } from 'react-icons/ai'
import { FaDollarSign } from 'react-icons/fa6'

import Button from '../../../components/common/Button'

export default function SectionAccess(){
  return(
    <Container>
      <ContainerTitle>
        <SubTitle>Recursos exclusivos</SubTitle>
        <AreaTitle>
          <GiPadlockOpen size={35} />
          <Title>Você terá acesso a</Title>
        </AreaTitle>
      </ContainerTitle>

      <ContainerInfo>
        <Gif src='https://res.cloudinary.com/doalz5zdo/image/upload/v1727126776/2_o0vxxo.gif' alt='Gif animado' />
        <AreaInfo>
          <TitleInfo>Aprendizagem passo a passo</TitleInfo>
          <Description>Você terá acesso a <span>+150 aulas e tutoriais</span> bem estruturados que abrangem desde os fundamentos do E-commerce até estrategias de Ads para fazer <span>+15mil por dia.</span>
          </Description>

          <AreaCorrect>
            <AiOutlineCheck size={30} />
            <Description><span>Metodologia fácil de seguir</span> para o sucesso financeiro</Description>
          </AreaCorrect>
          <AreaCorrect>
            <AiOutlineCheck size={30} />
            <Description>Novas <span>estratégias do E-commerce</span></Description>
          </AreaCorrect>
          <AreaCorrect>
            <AiOutlineCheck size={30} />
            <Description>Estratégias replicáveis e <span>totalmente honestas</span></Description>
          </AreaCorrect>
        </AreaInfo>
      </ContainerInfo>

      <ContainerMoreInformations>
        <AreaInformationsTitle>
          <TitleInfo>Calls semanais ao vivo com mentores milionários</TitleInfo>
          <Description>Cada um dos nossos <span>mentores obteve mais de R$200mil de faturamento</span> usando os métodos que ensinamos dentro do 1%.</Description>
          <Description><span>Eles são profissionais hipermotivados e experientes</span> que fornecerão a você um conhecimento organizado, novas lições diárias e orientação constante durante toda a sua jornada.</Description>
          <Description>Desde aprender como fazer sua primeira venda, <span>até escalar para um negócio multimilionário, entreno1porcento.com </span>é totalmente diferente de tudo que você já viu.</Description>
        </AreaInformationsTitle>
        <Gif src='https://res.cloudinary.com/doalz5zdo/image/upload/v1727126779/3_ezyisk.gif' alt='Gif animado' />
      </ContainerMoreInformations>

      <ContainerInfo>
        <Gif src='https://res.cloudinary.com/doalz5zdo/image/upload/v1727126786/1_jygccf.gif' alt='Gif animado' />
        <AreaInfo>
          <TitleInfo>Uma comunidade exclusiva com mais de 2 mil alunos com ideias semelhantes</TitleInfo>
          <Description>Nossa comunidade online é um ambiente de apoio e alto foco. Todos estão na mesma missão de adquirir abundância de riqueza.
          </Description>

          <AreaCorrect>
            <AiOutlineCheck size={30} />
            <Description>Estabeleça uma rede com <span>mais de 2.000 pessoas com a mesma missão</span></Description>
          </AreaCorrect>
          <AreaCorrect>
            <AiOutlineCheck size={30} />
            <Description>Faça <span>amigos com ideias semelhantes</span> em sua jornada financeira</Description>
          </AreaCorrect>
          <AreaCorrect>
            <AiOutlineCheck size={30} />
            <Description><span>Comemore suas vitórias</span> com pessoas que entendem de ambição</Description>
          </AreaCorrect>
        </AreaInfo>
      </ContainerInfo>

      <ContainerCta>
        <Button text='Aprenda hoje' />
        <AreaCta>
          <FaDollarSign size={20} />
          <DescriptionCta>Compre nesse preço antes que ele aumente. <span>Aja rápido.</span></DescriptionCta>
        </AreaCta>
      </ContainerCta>
    </Container>
  )
}