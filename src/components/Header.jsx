import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FiMenu, FiX } from 'react-icons/fi'
import logo from '../assets/logo.png'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <HeaderWrapper>
      <Nav>
        <LogoLink to="/">
          <Logo src={logo} alt="Polecony" />
          <span>Polecony</span>
        </LogoLink>

        <MenuButton onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX /> : <FiMenu />}
        </MenuButton>

        <NavLinks $isOpen={isOpen}>
          <NavLink to="/">Main</NavLink>
          <NavLink to="/installation">Installation</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/privacy">Privacy Policy</NavLink>
        </NavLinks>
      </Nav>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header`
  background: var(--white);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
`

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-weight: 600;
  font-size: 1.25rem;
  color: var(--primary);
`

const Logo = styled.img`
  width: 32px;
  height: 32px;
`

const MenuButton = styled.button`
  display: none;
  font-size: 1.5rem;
  color: var(--text);

  @media (max-width: 768px) {
    display: block;
  }
`

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    background: var(--white);
    padding: 1rem;
    gap: 1rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  }
`

const NavLink = styled(Link)`
  color: var(--text);
  font-weight: 500;
  transition: color 0.2s;

  &:hover {
    color: var(--primary);
  }
`

export default Header
