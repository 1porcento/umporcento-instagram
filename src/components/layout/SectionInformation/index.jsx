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

import iconFormatura from '../../../assets/icon-formatura.png'
import iconComunidade from '../../../assets/icon-comunidade.png'
import iconDollar from '../../../assets/icon-dollar.png'

import gif1 from '../../../assets/1.gif'
import gif4 from '../../../assets/4.gif'
import gif5 from '../../../assets/5.gif'

export default function SectionInformation(){
  return(
    <GeralContainer id='informacoes' >
      <Container>
        <Gif src={gif1} alt='Gif animado' />

        <AreaInfo>

          <AreaTitle>
            <Icon src={iconFormatura} />
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
        <Gif src={gif4} alt='Gif animado' />

        <AreaInfo>

          <AreaTitle>
            <Icon src={iconComunidade} />
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
        <Gif src={gif5} alt='Gif animado' />

        <AreaInfo>

          <AreaTitle>
            <Icon src={iconDollar} />
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