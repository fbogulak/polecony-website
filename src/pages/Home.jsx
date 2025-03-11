import React, { useState } from 'react'
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'
import { 
  FiZap, 
  FiLock, 
  FiDownload, 
  FiCheck, 
  FiAward, 
  FiServer, 
  FiUsers, 
  FiGlobe,
  FiChevronDown,
  FiKey,
  FiShieldOff
} from 'react-icons/fi'

// Styled components
const Container = styled.div`
  overflow: hidden;
`

const Hero = styled.section`
  position: relative;
  color: var(--white);
  padding: 8rem 2rem;
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
  overflow: hidden;
`

const HeroContent = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  z-index: 2;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`

const HeroText = styled.div`
  h1 {
    font-size: 4.5rem;
    line-height: 1.1;
    margin-bottom: 1.5rem;
    background: linear-gradient(135deg, #FFFFFF 0%, var(--gray-100) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    opacity: 0.9;
  }
`

const GradientText = styled.span`
  background: linear-gradient(135deg, var(--gray-100) 0%, #FFFFFF 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: 'Outfit', sans-serif;
  font-size: 1.25rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  display: block;
  margin-bottom: 1rem;
`

const CTAGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;

  @media (max-width: 968px) {
    justify-content: center;
    flex-wrap: wrap;
  }
`

const PrimaryCTA = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background: var(--white);
  color: var(--primary);
  padding: 1.25rem 2.5rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1.125rem;
  transition: all 0.2s;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: none;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
    background: var(--gray-50);
  }
`

const SecondaryCTA = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background: rgba(255, 255, 255, 0.1);
  color: var(--white);
  padding: 1.25rem 2.5rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1.125rem;
  transition: all 0.2s;
  border: 1px solid rgba(255, 255, 255, 0.2);

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.3);
  }
`

const TrustBadges = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  flex-wrap: wrap;

  @media (max-width: 968px) {
    justify-content: center;
  }
`

const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem 1.25rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 600;
  white-space: nowrap;
  
  ${props => {
    switch(props.$variant) {
      case 'primary':
        return `
          background: rgba(15, 140, 233, 0.15);
          color: #FFFFFF;
          border: 1px solid rgba(15, 140, 233, 0.3);
        `
      case 'secondary':
        return `
          background: rgba(7, 78, 140, 0.15);
          color: #FFFFFF;
          border: 1px solid rgba(7, 78, 140, 0.3);
        `
      case 'success':
        return `
          background: rgba(76, 177, 255, 0.15);
          color: #FFFFFF;
          border: 1px solid rgba(76, 177, 255, 0.3);
        `
      default:
        return `
          background: rgba(255, 255, 255, 0.1);
          color: #FFFFFF;
          border: 1px solid rgba(255, 255, 255, 0.2);
        `
    }
  }}

  svg {
    color: currentColor;
    font-size: 1.25rem;
  }
`

const ImagePlaceholder = styled.div`
  width: 100%;
  height: 400px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  border: 2px dashed rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.6);
  font-size: 1.25rem;
  
  @media (max-width: 968px) {
    display: none;
  }
`

const HeroBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 20%, rgba(76, 177, 255, 0.4) 0%, transparent 40%),
    radial-gradient(circle at 80% 80%, rgba(7, 78, 140, 0.4) 0%, transparent 40%);
  z-index: 1;
`

const Section = styled.section`
  padding: 8rem 2rem;
  background: ${props => props.$alternate ? 'var(--gray-50)' : 'white'};
`

const SectionTitle = styled.div`
  text-align: center;
  margin-bottom: 4rem;

  span {
    font-family: 'Outfit', sans-serif;
    font-size: 2.5rem;
    font-weight: 600;
    color: var(--text);
    display: block;
    margin-bottom: 1rem;
  }
`

const SubTitle = styled.p`
  color: var(--text-light);
  font-size: 1.25rem;
`

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`

const BenefitCard = styled.div`
  text-align: center;
  padding: 2rem;

  h3 {
    margin: 1rem 0;
    font-size: 1.5rem;
    color: var(--text);
  }

  p {
    color: var(--text-light);
  }
`

const IconWrapper = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  
  ${props => {
    switch(props.$variant) {
      case 'primary':
        return `color: var(--primary);`
      case 'secondary':
        return `color: var(--secondary);`
      case 'success':
        return `color: var(--primary-light);`
      default:
        return `color: var(--primary);`
    }
  }}
`

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`

const FeatureCard = styled.div`
  display: flex;
  gap: 1.5rem;
  padding: 2rem;
  background: var(--white);
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  
  /* Fixed content layout to prevent overflow */
  & > div {
    display: flex;
    flex-direction: column;
    overflow-wrap: break-word;
    word-wrap: break-word;
    word-break: break-word;
    hyphens: auto;
    
    h3 {
      margin-top: 0;
      margin-bottom: 0.75rem;
      font-size: 1.25rem;
      color: var(--text);
    }
    
    p {
      margin: 0;
      color: var(--text-light);
      font-size: 0.95rem;
      line-height: 1.5;
    }
  }
`

const FeatureIcon = styled.div`
  font-size: 2rem;
  ${props => {
    switch(props.$variant) {
      case 'primary':
        return `color: var(--primary);`
      case 'secondary':
        return `color: var(--secondary);`
      case 'success':
        return `color: var(--primary-light);`
      default:
        return `color: var(--primary);`
    }
  }}
  flex-shrink: 0;
`

const FAQContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`

const FAQItem = styled.div`
  background: var(--white);
  border-radius: 12px;
  margin-bottom: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  border: 1px solid var(--gray-100);

  ${props => props.$isOpen && `
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-color: var(--primary-light);
  `}
`

const FAQHeader = styled.div`
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  h3 {
    font-size: 1.25rem;
    color: var(--text);
  }
`

const FAQIcon = styled.span`
  color: var(--primary);
  transition: transform 0.3s ease;
  
  ${props => props.$isOpen && `
    transform: rotate(180deg);
  `}
`

const FAQContent = styled.div`
  padding: 0 1.5rem;
  max-height: 0;
  overflow: hidden;
  transition: all 0.3s ease;
  opacity: 0;

  ${props => props.$isOpen && `
    padding: 0 1.5rem 1.5rem 1.5rem;
    max-height: 500px;
    opacity: 1;
  `}

  p {
    color: var(--text-light);
  }
`

const CTASection = styled.section`
  text-align: center;
  padding: 6rem 2rem;
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
  color: var(--white);

  h2 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.25rem;
    margin-bottom: 2rem;
    opacity: 0.9;
  }
`

function Home() {
  const [openFaq, setOpenFaq] = useState(null)
  const navigate = useNavigate()

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const handleStartSharing = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    navigate('/installation')
  }

  const faqs = [
    {
      question: "Jak bezpieczny jest Polecony?",
      answer: "Polecony wykorzystuje szyfrowanie klasy wojskowej AES-256 i architekturę zero-knowledge. Twoje pliki są szyfrowane zanim opuszczą Twoje urządzenie, zapewniając maksymalne bezpieczeństwo i prywatność."
    },
    {
      question: "Jaki jest maksymalny rozmiar pliku?",
      answer: "Nie ma limitu rozmiaru pliku. Możesz przesyłać pliki o dowolnym rozmiarze z maksymalną wydajnością dzięki naszemu zoptymalizowanemu protokołowi transferu."
    },
    {
      question: "Czy Polecony jest zgodny z RODO?",
      answer: "Tak, Polecony jest w pełni zgodny z RODO i przestrzega surowych wytycznych dotyczących ochrony danych. Regularnie audytujemy nasze systemy, aby zapewnić zgodność z najnowszymi przepisami dotyczącymi prywatności."
    },
    {
      question: "Ile to kosztuje?",
      answer: "Polecony oferuje elastyczne plany cenowe, zaczynając od darmowego pakietu. Plany dla firm są dostępne dla większych zespołów z niestandardowymi wymaganiami."
    }
  ]

  return (
    <Container>
      <Hero id="hero">
        <HeroContent>
          <HeroText>
            <GradientText>Bezpieczne Udostępnianie Plików</GradientText>
            <h1>Chroń Dane Swojej Firmy</h1>
            <p>Udostępniaj poufne dokumenty z pewnością dzięki szyfrowaniu klasy wojskowej</p>
            <CTAGroup>
              <PrimaryCTA onClick={handleStartSharing}>
                <FiDownload /> Rozpocznij Za Darmo
              </PrimaryCTA>
              <SecondaryCTA to="/contact">
                Kontakt z Działem Sprzedaży
              </SecondaryCTA>
            </CTAGroup>
            <TrustBadges>
              <Badge $variant="primary"><FiKey /> Szyfrowanie End-to-End</Badge>
              <Badge $variant="secondary"><FiShieldOff /> Zero-Knowledge</Badge>
              <Badge $variant="success"><FiCheck /> Zgodny z RODO</Badge>
            </TrustBadges>
          </HeroText>
          <ImagePlaceholder>Miejsce na grafikę</ImagePlaceholder>
        </HeroContent>
        <HeroBackground />
      </Hero>

      {/* Benefits Section */}
      <Section id="benefits">
        <SectionTitle>
          <span>Dlaczego Warto Wybrać Polecony?</span>
          <SubTitle>Zaufały nam tysiące firm na całym świecie</SubTitle>
        </SectionTitle>
        <BenefitsGrid>
          <BenefitCard>
            <IconWrapper $variant="primary"><FiLock /></IconWrapper>
            <h3>Maksymalne Bezpieczeństwo</h3>
            <p>Twoje pliki są chronione szyfrowaniem klasy wojskowej zanim opuszczą Twoje urządzenie.</p>
          </BenefitCard>
          <BenefitCard>
            <IconWrapper $variant="secondary"><FiZap /></IconWrapper>
            <h3>Błyskawiczna Szybkość</h3>
            <p>Przesyłaj pliki o dowolnym rozmiarze z maksymalną prędkością dzięki naszemu zoptymalizowanemu protokołowi.</p>
          </BenefitCard>
          <BenefitCard>
            <IconWrapper $variant="success"><FiUsers /></IconWrapper>
            <h3>Gotowy dla Zespołów</h3>
            <p>Współpracuj bezpiecznie ze swoim zespołem dzięki zaawansowanym kontrolom udostępniania.</p>
          </BenefitCard>
        </BenefitsGrid>
      </Section>

      {/* Features Section */}
      <Section id="features" $alternate>
        <SectionTitle>
          <span>Zaawansowane Funkcje</span>
          <SubTitle>Wszystko, czego potrzebujesz do bezpiecznego udostępniania plików</SubTitle>
        </SectionTitle>
        <FeaturesGrid>
          <FeatureCard>
            <FeatureIcon $variant="primary"><FiServer /></FeatureIcon>
            <div>
              <h3>Przechowywanie Zero-Knowledge</h3>
              <p>Twoje pliki są szyfrowane przed przesłaniem. Nigdy nie mamy dostępu do Twoich danych.</p>
            </div>
          </FeatureCard>
          <FeatureCard>
            <FeatureIcon $variant="secondary"><FiGlobe /></FeatureIcon>
            <div>
              <h3>Wieloplatformowość</h3>
              <p>Dostępny na Windows, macOS, Linux, iOS i Android.</p>
            </div>
          </FeatureCard>
          <FeatureCard>
            <FeatureIcon $variant="success"><FiAward /></FeatureIcon>
            <div>
              <h3>Gotowy dla Firm</h3>
              <p>Zaawansowane funkcje dla współpracy zespołowej i administracji.</p>
            </div>
          </FeatureCard>
        </FeaturesGrid>
      </Section>

      {/* FAQ Section */}
      <Section id="faq">
        <SectionTitle>
          <span>Często Zadawane Pytania</span>
          <SubTitle>Wszystko, co musisz wiedzieć o Polecony</SubTitle>
        </SectionTitle>
        <FAQContainer>
          {faqs.map((faq, index) => (
            <FAQItem key={index} $isOpen={openFaq === index}>
              <FAQHeader onClick={() => toggleFaq(index)}>
                <h3>{faq.question}</h3>
                <FAQIcon $isOpen={openFaq === index}>
                  <FiChevronDown />
                </FAQIcon>
              </FAQHeader>
              <FAQContent $isOpen={openFaq === index}>
                <p>{faq.answer}</p>
              </FAQContent>
            </FAQItem>
          ))}
        </FAQContainer>
      </Section>

      {/* Final CTA */}
      <CTASection>
        <GradientText>Rozpocznij Już Dziś</GradientText>
        <h2>Gotowy zabezpieczyć swoje pliki?</h2>
        <p>Dołącz do tysięcy profesjonalistów, którzy ufają Polecony</p>
        <PrimaryCTA onClick={handleStartSharing}>
          <FiDownload /> Rozpocznij Bezpieczne Udostępnianie
        </PrimaryCTA>
      </CTASection>
    </Container>
  )
}

export default Home
