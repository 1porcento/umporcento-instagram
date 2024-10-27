import {
  Container,
  AreaTitle,
  SubTitle,
  Title,
  Description,
  AreaImages,
  Image,
  StudentsIcon,
  StudentsNumber
} from './styles'

import Button from '../../../components/common/Button'

import review1 from '../../../assets/review-1.jpg'
import review2 from '../../../assets/review-2.jpg'
import review3 from '../../../assets/review-3.jpg'
import review4 from '../../../assets/review-4.jpg'
import review5 from '../../../assets/review-5.jpg'
import review6 from '../../../assets/review-6.jpg'
import review7 from '../../../assets/review-7.jpg'
import review8 from '../../../assets/review-8.jpg'
import review9 from '../../../assets/review-9.jpg'

import iconStudents from '../../../assets/estudantes.webp'

export default function SectionReviews(){
  return(
    <Container id='avaliacoes' >

      <AreaTitle>
        <SubTitle>Alunos ganham</SubTitle>
        <Title>Vitórias dentro do 1%</Title>
        <Description>Disseram a você que um diploma tradicional é a referência de sucesso.</Description>
        <Description>Nossos <span>alunos entendem o que é realmente ter sucesso.</span></Description>
      </AreaTitle>

      <AreaImages>
        <Image src={review1} alt='Foto de avaliação do aluno' />
        <Image src={review2} alt='Foto de avaliação do aluno' />
        <Image src={review3} alt='Foto de avaliação do aluno' />
        <Image src={review4} alt='Foto de avaliação do aluno' />
        <Image src={review5} alt='Foto de avaliação do aluno' />
        <Image src={review6} alt='Foto de avaliação do aluno' />
        <Image src={review7} alt='Foto de avaliação do aluno' />
        <Image src={review8} alt='Foto de avaliação do aluno' />
        <Image src={review9} alt='Foto de avaliação do aluno' />
      </AreaImages>

      <Button text='ENTRE NO 1%' />
      <StudentsIcon src={iconStudents} alt='Ícone de estudantes' />
      <StudentsNumber>Junte-se <span>a mais de 2.000</span> estudantes dentro do 1%</StudentsNumber>

    </Container>
  )
}