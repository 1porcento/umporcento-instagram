import {
  Container,
  AreaTitle,
  SubTitle,
  Title,
  AreaModules,
  Module,
  AreaDescription,
  TitleDescription,
  Description,
  Image,
  AreaNew,
  NewTitle,
  NewDescription,
  AreaMiniDescription,
  MiniDescription
} from './styles'

import { RiShoppingBag3Line } from 'react-icons/ri'
import { IoBookOutline } from 'react-icons/io5'
import { LuHeartPulse } from 'react-icons/lu'
import { MdOutlineCastle, MdOutlineShoppingCart } from 'react-icons/md'
import { PiTreeStructure } from 'react-icons/pi'
import { IoLogoInstagram } from 'react-icons/io'
import { FaMeta } from 'react-icons/fa6'
import { FaTiktok } from 'react-icons/fa'
import { LuUsers } from 'react-icons/lu'
import { BsTelephone } from "react-icons/bs";

import Button from '../../../components/common/Button'

export default function SectionModules(){
  return(
    <Container id='profissoes' >

      <AreaTitle>
        <SubTitle>Acesso a mais de 15 módulos</SubTitle>
        <Title>O que você aprenderá</Title>
      </AreaTitle>

      <AreaModules>
        <Module>
          <AreaDescription>
            <RiShoppingBag3Line color='#d1a50e' size={25} />
            <TitleDescription>E-commerce</TitleDescription>
            <Description>Imagine lançar uma loja durante a noite e entrar no mercado global pela manhã. O E-commerce é sua porta de entrada para o sucesso rápido no digital.</Description>
          </AreaDescription>
          <Image src='https://res.cloudinary.com/doalz5zdo/image/upload/v1727268279/ecommerce_itlz45.png' alt='Foto ilustrativa do módulo' />
        </Module>

        <Module>
          <AreaDescription>
            <IoBookOutline color='#d1a50e' size={25} />
            <TitleDescription>Branding</TitleDescription>
            <Description>Começar sua jornada empresarial com uma base sólida e bem estruturada. Muitos tentam iniciar sem compreender os fundamentos essenciais, mas para alcançar o sucesso e construir uma marca milionária, é crucial dominar isso.</Description>
          </AreaDescription>
          <Image src='https://res.cloudinary.com/doalz5zdo/image/upload/v1727268279/fundamentos_jxfk1g.png' alt='Foto ilustrativa do módulo' />
        </Module>

        <Module>
          <AreaDescription>
            <PiTreeStructure color='#d1a50e' size={25} />
            <TitleDescription>Construindo sua estrutura</TitleDescription>
            <Description>Ter acesso a uma estratégia que apenas o 1% dos E-commerces aplicam, permitindo que você construa a estrutura da sua marca com uma clareza impressionante. Nós fornecemos um plano exclusivo que tem transformado a maneira como nossos alunos planejam e implementam nas suas marcas.</Description>
          </AreaDescription>
          <Image src='https://res.cloudinary.com/doalz5zdo/image/upload/v1727268279/estrutura_pnhdbq.png' alt='Foto ilustrativa do módulo' />
        </Module>

        <Module>
          <AreaDescription>
            <IoLogoInstagram color='#d1a50e' size={25} />
            <TitleDescription>Estrutura do instagram e mídias sociais</TitleDescription>
            <Description>Lançar sua marca no Instagram com uma presença visual que se destaca imediatamente da concorrência. Utilizamos fotos de um banco de dados exclusivo, com imagens profissionais que não estão disponíveis para o mercado em geral. Isso significa que você começa sua jornada com uma estrutura visual superior a 90% das marcas no mercado.</Description>
          </AreaDescription>
          <Image src='https://res.cloudinary.com/doalz5zdo/image/upload/v1727268279/instagram_stk56h.png' alt='Foto ilustrativa do módulo' />
        </Module>

        <Module>
          <AreaDescription>
            <MdOutlineShoppingCart color='#d1a50e' size={25} />
            <TitleDescription>Temas gringos e exclusivos para sua loja</TitleDescription>
            <Description>Construir sua loja virtual de forma acelerada e eficaz, com estratégias de planejamento que garantem agilidade na execução. Utilizando temas gringos e as melhores práticas internacionais, você aprenderá a criar um site profissional, desde a configuração básica até funcionalidades avançadas, tudo em um processo estruturado e simplificado.</Description>
          </AreaDescription>
          <Image src='https://res.cloudinary.com/doalz5zdo/image/upload/v1727268279/loja_g4erye.png' alt='Foto ilustrativa do módulo' />
        </Module>

        <Module>
          <AreaDescription>
            <FaMeta color='#d1a50e' size={25} />
            <TitleDescription>Face ads</TitleDescription>
            <Description>Imagine colocar um anúncio em apenas alguns minutos e, logo em seguida, começar a gerar vendas automaticamente. Com os Meta Ads (Facebook e Instagram), você transforma sua loja em uma verdadeira máquina de vendas 24/7. Enquanto você dorme, seus anúncios trabalham para você, atingindo milhões de potenciais clientes de forma precisa e estratégica.</Description>
          </AreaDescription>
          <Image src='https://res.cloudinary.com/doalz5zdo/image/upload/v1727268279/metaads_c225la.png' alt='Foto ilustrativa do módulo' />
        </Module>

        <Module>
          <AreaDescription>
            <FaTiktok color='#d1a50e' size={25} />
            <TitleDescription>Tiktok ads</TitleDescription>
            <Description>Explorar uma plataforma onde poucos ainda descobriram o verdadeiro potencial de vendas. O TikTok Ads é um território praticamente inexplorado, um verdadeiro "mar azul" para quem deseja escalar seus resultados no e-commerce de forma inovadora e eficaz. E nós somos os únicos que ensinam como fazer isso da forma certa.</Description>
          </AreaDescription>
          <Image src='https://res.cloudinary.com/doalz5zdo/image/upload/v1727268280/tiktokads_rfgjve.png' alt='Foto ilustrativa do módulo' />
        </Module>

        <Module>
          <AreaDescription>
            <LuUsers color='#d1a50e' size={25} />
            <TitleDescription>Marketing de influência</TitleDescription>
            <Description>Ter a chave para desbloquear o potencial máximo da sua marca através do poder do marketing de influência. Para uma marca, esse método é crucial e oferece uma oportunidade inigualável de escalar rapidamente.</Description>
          </AreaDescription>
          <Image src='https://res.cloudinary.com/doalz5zdo/image/upload/v1727268280/mktinfluencia_hb6xuu.png' alt='Foto ilustrativa do módulo' />
        </Module>

        <Module>
          <AreaDescription>
            <BsTelephone color='#d1a50e' size={25} />
            <TitleDescription>Funis e automações</TitleDescription>
            <Description>Vamos ensinar como implementar automações eficazes, utilizar estratégias de CRM e desenvolver táticas de relacionamento que transformam a experiência do cliente. WhatsApp, SMS, Ligações... Tudo no automático.</Description>
          </AreaDescription>
          <Image src='https://res.cloudinary.com/doalz5zdo/image/upload/v1727268279/atendimento_tedrf1.png' alt='Foto ilustrativa do módulo' />
        </Module>
      </AreaModules>

      <AreaNew>
        <NewTitle>Mais novas habilidades em breve</NewTitle>
        <NewDescription>O 1% é um ecossistema de oportunidades em constante expansão. Estamos sempre selecionando habilidades de ponta que elevam você ao topo do seu setor e garantem seu destaque no mercado.</NewDescription>
        <Button text='Aprenda hoje' />
        <AreaMiniDescription>
          <MdOutlineCastle size={20}/>
          <MiniDescription>Tenha acesso a <span>todos os módulos</span></MiniDescription>
        </AreaMiniDescription>
      </AreaNew>

    </Container>
  )
}