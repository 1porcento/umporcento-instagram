import {
  Container,
  AreaTitle,
  SubTitle,
  Title,
  AreaPlan,
  AreaPlanTitle,
  PlanTitle,
  PlanSubTitle,
  AreaPrice,
  PriceBefore,
  PriceAfter,
  Or,
  Price,
  ContainerChecked,
  AreaChecked,
  CheckedDescription,
  AreaMessages,
  AreaMessage,
  Message,
  MessageYellow,
  ButtonCheckout
} from './styles'

import { AiOutlineCheck } from 'react-icons/ai'
import { MdCancelPresentation } from 'react-icons/md'
import { CiBadgeDollar } from 'react-icons/ci'

export default function SectionPlans(){

  function handleCheckoutTrimestral(){
    window.open('https://pay.hub.la/AZuSiXNvJDuVU9cw1Nrx', '_blank', 'noopener,noreferrer');
  }

  return(
    <Container id='planos' >
      <AreaTitle>
        <SubTitle>Você está pronto?</SubTitle>
        <Title>A escolha é sua</Title>
      </AreaTitle>

      <AreaPlan>
        <AreaPlanTitle>
          <PlanTitle>Tome uma atitude</PlanTitle>
          <PlanSubTitle>Você precisa agir agora</PlanSubTitle>
        </AreaPlanTitle>

        <AreaPrice>
          <PriceBefore>R$ 697,99</PriceBefore>
          <PriceAfter>12x de 29,25</PriceAfter>
        </AreaPrice>
        <Or>ou</Or>
        <Price>R$ 299,99</Price>

        <ContainerChecked>
          <AreaChecked>
            <AiOutlineCheck size={20} />
            <CheckedDescription>Tutoriais simples passo a passo</CheckedDescription>
          </AreaChecked>
          <AreaChecked>
            <AiOutlineCheck size={20} />
            <CheckedDescription>+15 módulos para você alcançar sua riqueza</CheckedDescription>
          </AreaChecked>
          <AreaChecked>
            <AiOutlineCheck size={20} />
            <CheckedDescription>Acesso a mentores milionários</CheckedDescription>
          </AreaChecked>
          <AreaChecked>
            <AiOutlineCheck size={20} />
            <CheckedDescription>Grupos de bate-papo da comunidade</CheckedDescription>
          </AreaChecked>
          <AreaChecked>
            <AiOutlineCheck size={20} />
            <CheckedDescription>Ecossistema do 1% para você</CheckedDescription>
          </AreaChecked>
          <AreaChecked>
            <AiOutlineCheck size={20} />
            <CheckedDescription>Uma call gratuita individual com um especialista, assim que comprar o 1%</CheckedDescription>
          </AreaChecked>
        </ContainerChecked>

        <AreaMessages>
          <AreaMessage>
            <MdCancelPresentation size={20} />
            <Message>Cancele a qualquer momento, sem riscos</Message>
          </AreaMessage>
          <AreaMessage>
            <CiBadgeDollar size={20} color='#d1a50e' />
            <MessageYellow>R$ 29,25/mês por um ano</MessageYellow>
          </AreaMessage>
        </AreaMessages>
        <ButtonCheckout onClick={handleCheckoutTrimestral} >Acessar agora</ButtonCheckout>
      </AreaPlan>
    </Container>
  )
}