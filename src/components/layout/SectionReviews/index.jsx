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
        <Image src='https://res.cloudinary.com/doalz5zdo/image/upload/v1727124331/review-6_jzcihr.jpg' alt='Foto de avaliação do aluno' />
        <Image src='https://res.cloudinary.com/doalz5zdo/image/upload/v1727124331/review-8_cicagx.jpg' alt='Foto de avaliação do aluno' />
        <Image src='https://res.cloudinary.com/doalz5zdo/image/upload/v1727124331/review-7_ty2vun.jpg' alt='Foto de avaliação do aluno' />
        <Image src='https://res.cloudinary.com/doalz5zdo/image/upload/v1727124331/review-9_c5dx8n.jpg' alt='Foto de avaliação do aluno' />
        <Image src='https://res.cloudinary.com/doalz5zdo/image/upload/v1727124329/review-1_jvkv2y.jpg' alt='Foto de avaliação do aluno' />
        <Image src='https://res.cloudinary.com/doalz5zdo/image/upload/v1727124330/review-5_zakk3c.jpg' alt='Foto de avaliação do aluno' />
        <Image src='https://res.cloudinary.com/doalz5zdo/image/upload/v1727124330/review-4_ptwzat.jpg' alt='Foto de avaliação do aluno' />
        <Image src='https://res.cloudinary.com/doalz5zdo/image/upload/v1727124330/review-2_vqnrv9.jpg' alt='Foto de avaliação do aluno' />
        <Image src='https://res.cloudinary.com/doalz5zdo/image/upload/v1727124330/review-3_fhddvj.jpg' alt='Foto de avaliação do aluno' />
      </AreaImages>

      <Button text='ENTRE NO 1%' />
      <StudentsIcon src='https://res.cloudinary.com/doalz5zdo/image/upload/v1727299844/estudantes_trnhm9.webp' alt='Ícone de estudantes' />
      <StudentsNumber>Junte-se <span>a mais de 2.000</span> estudantes dentro do 1%</StudentsNumber>

    </Container>
  )
}