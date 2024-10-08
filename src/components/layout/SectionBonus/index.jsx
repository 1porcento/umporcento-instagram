import {
  Container,
  Title,
  AreaCard,
  Card,
  AreaCardTitle,
  CardTitle,
  CardDescription
} from './styles'

import { CiHeadphones } from 'react-icons/ci'
import { FiUser } from "react-icons/fi";
import { FaDollarSign } from "react-icons/fa";

export default function SectionBonus(){
  return(
    <Container>
      <Title>Bônus exclusivos</Title>
      <AreaCard>
        <Card>
          <AreaCardTitle>
            <CiHeadphones color='#d1a50e' size={25} />
            <CardTitle>Call exclusiva</CardTitle>
          </AreaCardTitle>
          <CardDescription>Você vai ganhar uma call gratuita exclusiva comigo e com um especialista do mercado após entrar no 1%, para tirar todas as dúvidas sobre os assuntos abordados dentro da comunidade, e sobre as aplicações que você está fazendo com sua operação.</CardDescription>
        </Card>

        <Card>
          <AreaCardTitle>
            <FiUser color='#d1a50e' size={25} />
            <CardTitle>Materiais exclusivos</CardTitle>
          </AreaCardTitle>
          <CardDescription>Você receberá planilhas de precificações, mapas mentais, arquivos em pdf e diversos outros documentos que irão te auxiliar na jornada de desenvolvimento do seu E-commerce.</CardDescription>
        </Card>

        <Card>
          <AreaCardTitle>
            <FaDollarSign color='#d1a50e' size={25} />
            <CardTitle>Plaquinhas de faturamento</CardTitle>
          </AreaCardTitle>
          <CardDescription>Além de aprender estratégias que funcionam no e-commerce, você ainda pode conquistar plaquinhas de faturamento, mostrando que está realmente lucrando e alcançando suas metas. Esqueça as promessas vazias, venha para onde o sucesso é medido em resultados concretos!</CardDescription>
        </Card>
      </AreaCard>
    </Container>
  )
}