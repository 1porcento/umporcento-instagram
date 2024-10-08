import {
  Container,
  Logo,
  TitleContent,
  TextContent,
  TextContentWhite,
  StudentsIcon,
  StudentsNumber
} from './styles'

import Button from '../../common/Button'

import logo from '../../../assets/logo-1porcento.png'

export default function SectionContent(){
  return(
    <Container id='sobre' >
      <Logo src={logo} alt='Logo 1%' />
      <TitleContent><span>Você não</span> tem tempo a perder</TitleContent>
      <TextContent>Enquanto a maioria tem suas cabeças enterradas em estudos por 4 anos numa faculdade...</TextContent>
      <TextContentWhite>Crianças de 14 anos e jovens estão ficando mais ricos a cada dia com a internet.</TextContentWhite>
      <TextContent>Inúmeras oportunidades de riqueza estão passando pela sua frente e você nem percebe.</TextContent>
      <TextContent>É hora de você assumir o controle das oportunidades que a maioria das pessoas<br/> ignoram e aprender a habilidade mais importante para viver uma vida de liberdade...</TextContent>
      <TextContentWhite>Como ganhar dinheiro online.</TextContentWhite>

      <Button text='Aprenda hoje' />

      <StudentsIcon src='https://res.cloudinary.com/doalz5zdo/image/upload/v1727299844/estudantes_trnhm9.webp' alt='Ícone de estudantes' />
      <StudentsNumber>Junte-se <span>a mais de 2.000</span> estudantes dentro do 1%</StudentsNumber>
    </Container>
  )
}