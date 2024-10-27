import {
  Container,
  AreaTitle,
  SubTitle,
  Title,
  AreaPrices,
  Price,
  IconVs,
  PriceTitle,
  PriceTitleYellow,
  PriceFaculty,
  PriceCourse,
  PriceDescription,
  ButtonClt
} from './styles'

import Button from '../../../components/common/Button'

import vsIcon from '../../../assets/vs.png'

export default function SectionPaths(){
  return(
    <Container id='alternativa' >
      <AreaTitle>
        <SubTitle>Escolha seu caminho</SubTitle>
        <Title>Dois caminhos estão diante de você</Title>
      </AreaTitle>

      <AreaPrices>
        <Price>
          <PriceTitle>PAGAR A <span>FACULDADE</span></PriceTitle>
          <PriceFaculty>R$250,000+</PriceFaculty>
          <PriceDescription>Siga o caminho da faculdade convencional, investindo anos e valores significativos em uma educação tradicional, apenas para se juntar às fileiras de inúmeros funcionários.</PriceDescription>
          <ButtonClt>Permanecer como funcionário</ButtonClt>
        </Price>

        <IconVs src={vsIcon} alt='Ícone VS' />

        <Price>
          <PriceTitleYellow>PAGAR O <span>1%</span></PriceTitleYellow>
          <PriceCourse>R$29,25</PriceCourse>
          <PriceDescription>Acesse imediatamente e ganhe uma call individual com um especialista de e-commerce e garanta seu destaque no mercado.</PriceDescription>
          <Button text='Acessar o plano' />
        </Price>
      </AreaPrices>
    </Container>
  )
}