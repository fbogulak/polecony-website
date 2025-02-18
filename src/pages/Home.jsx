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

const GradientOrb = styled.div`
  position: relative;
  width: 500px;
  height: 500px;
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.05) 30%,
    transparent 70%
  );
  border-radius: 50%;
  animation: float 6s ease-in-out infinite;

  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
    100% { transform: translateY(0px); }
  }

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
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  h3 {
    margin-bottom: 0.5rem;
    color: var(--text);
  }

  p {
    color: var(--text-light);
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
      question: "How secure is Polecony?",
      answer: "Polecony uses military-grade AES-256 encryption and zero-knowledge architecture. Your files are encrypted before they leave your device, ensuring maximum security and privacy."
    },
    {
      question: "What's the maximum file size?",
      answer: "There is no file size limit. You can transfer files of any size with maximum efficiency thanks to our optimized transfer protocol."
    },
    {
      question: "Is Polecony GDPR compliant?",
      answer: "Yes, Polecony is fully GDPR compliant and follows strict data protection guidelines. We regularly audit our systems to ensure compliance with the latest privacy regulations."
    },
    {
      question: "How much does it cost?",
      answer: "Polecony offers flexible pricing plans starting with a free tier. Enterprise plans are available for larger teams with custom requirements."
    }
  ]

  return (
    <Container>
      <Hero id="hero">
        <HeroContent>
          <HeroText>
            <GradientText>Secure File Sharing</GradientText>
            <h1>Protect Your Business Data</h1>
            <p>Share sensitive documents with confidence using military-grade encryption</p>
            <CTAGroup>
              <PrimaryCTA onClick={handleStartSharing}>
                <FiDownload /> Get Started Free
              </PrimaryCTA>
              <SecondaryCTA to="/contact">
                Contact Sales
              </SecondaryCTA>
            </CTAGroup>
            <TrustBadges>
              <Badge $variant="primary"><FiKey /> End-to-End Encrypted</Badge>
              <Badge $variant="secondary"><FiShieldOff /> Zero-Knowledge</Badge>
              <Badge $variant="success"><FiCheck /> GDPR Compliant</Badge>
            </TrustBadges>
          </HeroText>
          <GradientOrb />
        </HeroContent>
        <HeroBackground />
      </Hero>

      {/* Benefits Section */}
      <Section id="benefits">
        <SectionTitle>
          <span>Why Choose Polecony?</span>
          <SubTitle>Trusted by thousands of businesses worldwide</SubTitle>
        </SectionTitle>
        <BenefitsGrid>
          <BenefitCard>
            <IconWrapper $variant="primary"><FiLock /></IconWrapper>
            <h3>Maximum Security</h3>
            <p>Your files are protected with military-grade encryption before they leave your device.</p>
          </BenefitCard>
          <BenefitCard>
            <IconWrapper $variant="secondary"><FiZap /></IconWrapper>
            <h3>Lightning Fast</h3>
            <p>Transfer files of any size at maximum speed with our optimized protocol.</p>
          </BenefitCard>
          <BenefitCard>
            <IconWrapper $variant="success"><FiUsers /></IconWrapper>
            <h3>Team Ready</h3>
            <p>Collaborate securely with your team using advanced sharing controls.</p>
          </BenefitCard>
        </BenefitsGrid>
      </Section>

      {/* Features Section */}
      <Section id="features" $alternate>
        <SectionTitle>
          <span>Powerful Features</span>
          <SubTitle>Everything you need for secure file sharing</SubTitle>
        </SectionTitle>
        <FeaturesGrid>
          <FeatureCard>
            <FeatureIcon $variant="primary"><FiServer /></FeatureIcon>
            <div>
              <h3>Zero-Knowledge Storage</h3>
              <p>Your files are encrypted before upload. We can't access your data - ever.</p>
            </div>
          </FeatureCard>
          <FeatureCard>
            <FeatureIcon $variant="secondary"><FiGlobe /></FeatureIcon>
            <div>
              <h3>Cross-Platform</h3>
              <p>Available on Windows, macOS, Linux, iOS, and Android.</p>
            </div>
          </FeatureCard>
          <FeatureCard>
            <FeatureIcon $variant="success"><FiAward /></FeatureIcon>
            <div>
              <h3>Enterprise Ready</h3>
              <p>Advanced features for team collaboration and administration.</p>
            </div>
          </FeatureCard>
        </FeaturesGrid>
      </Section>

      {/* FAQ Section */}
      <Section id="faq">
        <SectionTitle>
          <span>Common Questions</span>
          <SubTitle>Everything you need to know about Polecony</SubTitle>
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
        <GradientText>Get Started Today</GradientText>
        <h2>Ready to secure your files?</h2>
        <p>Join thousands of professionals who trust Polecony</p>
        <PrimaryCTA onClick={handleStartSharing}>
          <FiDownload /> Start Secure Sharing
        </PrimaryCTA>
      </CTASection>
    </Container>
  )
}

export default Home
