import {
  GeralContainer,
  Container,
  Gif,
  AreaInfo,
  AreaTitle,
  Icon,
  Title,
  AreaDescription,
  Description
} from './styles'

import { AiOutlineCheck } from 'react-icons/ai'

export default function SectionInformation(){
  return(
    <GeralContainer id='informacoes' >
      <Container>
        <Gif src='https://res.cloudinary.com/doalz5zdo/image/upload/v1727126786/1_jygccf.gif' alt='Gif animado' />

        <AreaInfo>

          <AreaTitle>
            <Icon src='https://res.cloudinary.com/doalz5zdo/image/upload/v1727124329/icon-formatura_voay5r.png' />
            <Title>Aprenda a <span>fazer dinheiro de verdade</span></Title>
          </AreaTitle>

          <AreaDescription>
            <AiOutlineCheck size={30} />
            <Description>Área de membros <span>totalmente personalizado</span></Description>
          </AreaDescription>
          <AreaDescription>
            <AiOutlineCheck size={30} />
            <Description>Escale de <span>zero a R$ 10 mil/mês</span> o mais rápido possível</Description>
          </AreaDescription>
          <AreaDescription>
            <AiOutlineCheck size={30} />
            <Description>Domine as habilidades necessárias para <span>o E-commerce</span></Description>
          </AreaDescription>

        </AreaInfo>
      </Container>

      <Container>
        <Gif src='https://res.cloudinary.com/doalz5zdo/image/upload/v1727126775/4_aeiuvf.gif' alt='Gif animado' />

        <AreaInfo>

          <AreaTitle>
            <Icon src='https://res.cloudinary.com/doalz5zdo/image/upload/v1727124329/icon-comunidade_srkkyh.png' />
            <Title>Junte-se a um <span>grupo seleto</span></Title>
          </AreaTitle>

          <AreaDescription>
            <AiOutlineCheck size={30} />
            <Description><span>Comemore suas vitórias </span>com pessoas que não aplicam <span>golpes</span></Description>
          </AreaDescription>
          <AreaDescription>
            <AiOutlineCheck size={30} />
            <Description>Faça networking com <span>mais de 2.000 jovens do E-commerce</span></Description>
          </AreaDescription>

        </AreaInfo>
      </Container>

      <Container>
        <Gif src='https://res.cloudinary.com/doalz5zdo/image/upload/v1727126576/5_jlfhdq.gif' alt='Gif animado' />

        <AreaInfo>

          <AreaTitle>
            <Icon src='https://res.cloudinary.com/doalz5zdo/image/upload/v1727124329/icon-dollar_qju0lc.png' />
            <Title>Acesso a <span>milionários</span></Title>
          </AreaTitle>

          <AreaDescription>
            <AiOutlineCheck size={30} />
            <Description>Mentores especialistas em <span>cada área do E-commerce</span></Description>
          </AreaDescription>
          <AreaDescription>
            <AiOutlineCheck size={30} />
            <Description><span>Conselhos individuais </span>de especialistas do mercado</Description>
          </AreaDescription>

        </AreaInfo>
      </Container>
    </GeralContainer>
  )
}