import React from 'react'
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'
import logo from '../assets/logo.svg'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const navigate = useNavigate()
  
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  
  const handleNavigation = (path) => {
    // If we're already on the page, just scroll to top
    if (window.location.pathname === path) {
      handleScrollToTop()
    } else {
      // Otherwise navigate to the page and then scroll to top
      navigate(path)
      // Small timeout to ensure navigation completes before scrolling
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }, 100)
    }
  }
  
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterLogo onClick={handleScrollToTop}>
            <img src={logo} alt="Polecony" />
            <span>Polecony</span>
          </FooterLogo>
          <FooterText>
            Bezpieczne udostępnianie plików dla firm i profesjonalistów. Chroń swoje dane dzięki szyfrowaniu klasy wojskowej.
          </FooterText>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>Nawigacja</FooterTitle>
          <FooterLinks>
            <FooterNavItem onClick={() => handleNavigation('/')}>
              Główna
            </FooterNavItem>
            <FooterNavItem onClick={() => handleNavigation('/installation')}>
              Instalacja
            </FooterNavItem>
            <FooterNavItem onClick={() => handleNavigation('/contact')}>
              Kontakt
            </FooterNavItem>
            <FooterNavItem onClick={() => handleNavigation('/privacy')}>
              Polityka Prywatności
            </FooterNavItem>
          </FooterLinks>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>Kontakt</FooterTitle>
          <ContactInfo>
            <ContactItem>
              <FiMail />
              <ContactLink 
                href="mailto:kontakt@polecony.pl" 
                aria-label="Wyślij email do Polecony"
              >
                kontakt@polecony.pl
              </ContactLink>
            </ContactItem>
            <ContactItem>
              <FiPhone />
              <ContactLink 
                href="tel:+48221234567" 
                aria-label="Zadzwoń do Polecony"
              >
                +48 22 123 45 67
              </ContactLink>
            </ContactItem>
            <ContactItem>
              <FiMapPin />
              <ContactLink 
                href="https://maps.google.com/?q=ul.+Bezpieczna+256,+00-001+Warszawa" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Zobacz lokalizację Polecony na mapie"
              >
                ul. Bezpieczna 256, 00-001 Warszawa
              </ContactLink>
            </ContactItem>
          </ContactInfo>
        </FooterSection>
      </FooterContent>
      
      <FooterBottom>
        <Copyright>© {currentYear} Polecony. Wszelkie prawa zastrzeżone.</Copyright>
      </FooterBottom>
    </FooterContainer>
  )
}

const FooterContainer = styled.footer`
  background-color: var(--gray-50);
  padding: 4rem 2rem 2rem;
  color: var(--text-light);
  width: 100%;
`

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
`

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
`

const FooterLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
  cursor: pointer;
  
  img {
    width: 32px;
    height: 32px;
  }
  
  span {
    font-weight: 600;
    font-size: 1.25rem;
    color: var(--primary);
  }
`

const FooterText = styled.p`
  line-height: 1.6;
  margin-bottom: 1.5rem;
`

const FooterTitle = styled.h3`
  color: var(--text);
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
  font-weight: 600;
`

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

const FooterNavItem = styled.button`
  color: var(--text-light);
  transition: color 0.2s;
  text-align: left;
  padding: 0.5rem 0;
  font-size: 1rem;
  
  &:hover {
    color: var(--primary);
  }
`

const FooterLink = styled(Link)`
  color: var(--text-light);
  transition: color 0.2s;
  
  &:hover {
    color: var(--primary);
  }
`

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  
  svg {
    color: var(--primary);
    font-size: 1.25rem;
    flex-shrink: 0;
  }
`

const ContactLink = styled.a`
  color: var(--text-light);
  transition: color 0.2s;
  
  &:hover {
    color: var(--primary);
    text-decoration: underline;
  }
`

const FooterBottom = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 2rem;
  margin-top: 3rem;
  border-top: 1px solid var(--gray-100);
  text-align: center;
`

const Copyright = styled.p`
  font-size: 0.875rem;
`

export default Footer
