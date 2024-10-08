import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'

import {
  Nav,
  Logo,
  NavList,
  NavItem,
  NavItemShop,
  HamburgerIcon,
  MobileNav
} from './styles'

import logo from '../../../assets/logo-1porcento.png'

export default function AreaNavigation() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <Nav>
      <Link to='/'>
        <Logo src={logo} alt='Logo 1%' width={80} height={80} />
      </Link>

      <HamburgerIcon onClick={toggleMenu}>
        {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
      </HamburgerIcon>

      <NavList>
        <NavItem><a href='#sobre'>1%</a></NavItem>
        <NavItem><a href='#informacoes'>Informações</a></NavItem>
        <NavItem><a href='#avaliacoes'>Alunos</a></NavItem>
        <NavItem><a href='#profissoes'>Módulos</a></NavItem>
        <NavItem><a href='#alternativa'>Escolha seu caminho</a></NavItem>
        <NavItemShop><a href='#planos'>Comprar agora</a></NavItemShop>
      </NavList>

      {isOpen && (
        <MobileNav>
          <NavItem><a href='#sobre'>O 1%</a></NavItem>
          <NavItem><a href='#informacoes'>Mais informações</a></NavItem>
          <NavItem><a href='#avaliacoes'>Avaliações</a></NavItem>
          <NavItem><a href='#profissoes'>Profissões</a></NavItem>
          <NavItem><a href='#alternativa'>A alternativa</a></NavItem>
          <NavItem><a href='#planos'>Comprar agora</a></NavItem>
        </MobileNav>
      )}
    </Nav>
  )
}
