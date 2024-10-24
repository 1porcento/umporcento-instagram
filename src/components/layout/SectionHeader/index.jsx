import {
  Container,
  SiteName,
  Title,
  Description,
  VideoFrame
} from './styles'

import Button from '../../common/Button'

export default function SectionHeader(){
  return(
    <Container>
      <SiteName>entreno1porcento.com</SiteName>
      <Title>99% das pessoas seguem o caminho comum, o que te impede de fazer parte do 1%?🔒</Title>
      <Description>Enquanto a maioria se conforma com o previsível, os jovens do <span>1%</span> decidem <span>trancar-se</span> hoje para, em <span>6 meses,</span> viverem uma nova realidade financeira com <span>E-commerce.</span> Está pronto para <span>transformar seu futuro?</span></Description>
      <VideoFrame
        src="https://player.vimeo.com/video/1012853743?title=0&byline=0&portrait=0&controls=1&autoplay=1&muted=1"
        frameborder="0"
        allow="autoplay; fullscreen"
        allowfullscreen
      />
      <Button text='Entrar agora' />
    </Container>
  )
}