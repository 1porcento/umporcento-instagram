import styled from 'styled-components'

export const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px 40px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  backdrop-filter: blur(7px);
  z-index: 99;

  @media(max-width: 768px) {
    justify-content: space-between;
  }

  @media(max-width: 450px) {
    padding: 20px 20px;
  }
`

export const Logo = styled.img`
  object-fit: contain;

  @media(max-width: 990px) {
    width: 60px;
    height: 60px;
  }

  @media(max-width: 450px) {
    width: 50px;
    height: 50px;
  }
`

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 50px;

  @media(max-width: 1024px) {
    gap: 30px;
  }

  @media(max-width: 990px) {
    gap: 15px;
  }

  @media(max-width: 768px) {
    display: none;
  }
`

export const NavItem = styled.li`
  font-size: 14px;
  text-transform: uppercase;
  font-weight: bold;
  padding-bottom: 8px;
  transition: all 0.3s;
  border-bottom: 1px solid transparent;

  &:hover {
    border-bottom: 1px solid #d1a50e; 
  }

  a {
    color: #FFF;
    transition: all 0.3s;

    &:hover {
      color: #d1a50e;
    }
  }

  @media(max-width: 990px) {
    font-size: 12px;
  }
`

export const NavItemShop = styled.li`
  font-size: 14px;
  text-transform: uppercase;
  font-weight: bold;
  transition: all 0.3s;
  background: linear-gradient(to right, #d1a50e, orange);
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  transform: translateY(-2px);

  &:hover {
    box-shadow: 0 0 30px rgba(209, 165, 14, 0.6);
    transform: scale(1.05);
  }

  a {
    padding: 10px 5px;
    border-radius: 5px;
  }
`

export const HamburgerIcon = styled.div`
  display: none;
  cursor: pointer;

  @media(max-width: 768px) {
    display: block;
    color: #FFF;
  }
`

export const MobileNav = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: #121212;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  text-align: center;

  a {
    color: #FFF;
    text-transform: uppercase;
    font-weight: bold;
  }
`
