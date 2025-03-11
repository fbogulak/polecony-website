import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { Link, useLocation } from 'react-router-dom'
import { FiMenu, FiX } from 'react-icons/fi'
import logo from '../assets/logo.svg'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const navRef = useRef(null)
  const location = useLocation()
  
  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [location])
  
  // Handle clicks outside the navbar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      document.addEventListener('touchstart', handleClickOutside)
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('touchstart', handleClickOutside)
    }
  }, [isOpen])

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleNavLinkClick = (e) => {
    if (e.target.pathname === window.location.pathname) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <HeaderWrapper>
      <Nav ref={navRef}>
        <LogoLink to="/" onClick={handleLogoClick}>
          <Logo src={logo} alt="Polecony" />
          <span>Polecony</span>
        </LogoLink>

        <MenuButton 
          onClick={toggleMenu} 
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Zamknij menu" : "Otwórz menu"}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </MenuButton>

        <NavLinks 
          id="mobile-menu"
          $isOpen={isOpen}
          aria-hidden={!isOpen}
          role="navigation"
        >
          <NavLink to="/" onClick={handleNavLinkClick}>Start</NavLink>
          <NavLink to="/installation" onClick={handleNavLinkClick}>Instalacja</NavLink>
          <NavLink to="/contact" onClick={handleNavLinkClick}>Kontakt</NavLink>
          <NavLink to="/privacy" onClick={handleNavLinkClick}>Polityka Prywatności</NavLink>
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
  position: relative;
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
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  transition: background-color 0.2s;
  
  &:hover, &:focus {
    background-color: var(--gray-50);
  }

  @media (min-width: 769px) {
    display: none;
  }
  
  @media (max-width: 768px) {
    display: flex;
  }
`

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    background: var(--white);
    padding: 0;
    gap: 0;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transform: ${({ $isOpen }) => ($isOpen ? 'translateY(0)' : 'translateY(-10px)')};
    opacity: ${({ $isOpen }) => ($isOpen ? '1' : '0')};
    visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
    transition: all 0.3s ease-in-out;
    max-height: ${({ $isOpen }) => ($isOpen ? '300px' : '0')};
    overflow: hidden;
    z-index: -1;
  }
`

const NavLink = styled(Link)`
  color: var(--text);
  font-weight: 500;
  transition: color 0.2s;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  
  &:hover {
    color: var(--primary);
  }
  
  @media (max-width: 768px) {
    padding: 1rem 1.5rem;
    display: block;
    min-height: 44px;
    display: flex;
    align-items: center;
    border-radius: 0;
    border-bottom: 1px solid var(--gray-50);
    
    &:hover {
      background-color: var(--gray-50);
    }
    
    &:last-child {
      border-bottom: none;
    }
  }
`

export default Header
