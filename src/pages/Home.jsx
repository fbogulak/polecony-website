import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FiShield, FiZap, FiLock, FiDownload, FiCheck, FiAward, FiServer, FiUsers, FiGlobe } from 'react-icons/fi'

const Home = () => {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <Container>
      {/* Hero Section */}
      <Hero id="hero">
        <HeroContent>
          <HeroText>
            <h1>Secure File Sharing for Modern Business</h1>
            <p>Share sensitive documents with confidence using military-grade encryption</p>
            <CTAButton to="/installation">
              <FiDownload /> Get Started Free
            </CTAButton>
            <TrustBadges>
              <Badge><FiCheck /> End-to-End Encrypted</Badge>
              <Badge><FiCheck /> GDPR Compliant</Badge>
              <Badge><FiCheck /> Zero-Knowledge</Badge>
            </TrustBadges>
          </HeroText>
          <HeroImage>
            <SecurityIcon><FiShield /></SecurityIcon>
          </HeroImage>
        </HeroContent>
      </Hero>

      {/* Benefits Section */}
      <Section id="benefits">
        <SectionTitle>Why Choose Polecony?</SectionTitle>
        <BenefitsGrid>
          <BenefitCard>
            <IconWrapper><FiLock /></IconWrapper>
            <h3>Maximum Security</h3>
            <p>Your files are protected with military-grade encryption before they leave your device.</p>
          </BenefitCard>
          <BenefitCard>
            <IconWrapper><FiZap /></IconWrapper>
            <h3>Lightning Fast</h3>
            <p>Transfer files of any size at maximum speed with our optimized protocol.</p>
          </BenefitCard>
          <BenefitCard>
            <IconWrapper><FiUsers /></IconWrapper>
            <h3>Team Ready</h3>
            <p>Collaborate securely with your team using advanced sharing controls.</p>
          </BenefitCard>
        </BenefitsGrid>
      </Section>

      {/* Features Section */}
      <Section id="features" $alternate>
        <SectionTitle>Powerful Features</SectionTitle>
        <FeaturesGrid>
          <FeatureCard>
            <FeatureIcon><FiServer /></FeatureIcon>
            <div>
              <h3>Zero-Knowledge Storage</h3>
              <p>Your files are encrypted before upload. We can't access your data - ever.</p>
            </div>
          </FeatureCard>
          <FeatureCard>
            <FeatureIcon><FiGlobe /></FeatureIcon>
            <div>
              <h3>Cross-Platform</h3>
              <p>Available on Windows, macOS, Linux, iOS, and Android.</p>
            </div>
          </FeatureCard>
          <FeatureCard>
            <FeatureIcon><FiAward /></FeatureIcon>
            <div>
              <h3>Enterprise Ready</h3>
              <p>Advanced features for team collaboration and administration.</p>
            </div>
          </FeatureCard>
        </FeaturesGrid>
      </Section>

      {/* FAQ Section */}
      <Section id="faq">
        <SectionTitle>Frequently Asked Questions</SectionTitle>
        <FAQGrid>
          <FAQItem>
            <h3>How secure is Polecony?</h3>
            <p>Polecony uses military-grade AES-256 encryption and zero-knowledge architecture. Your files are encrypted before they leave your device.</p>
          </FAQItem>
          <FAQItem>
            <h3>What's the maximum file size?</h3>
            <p>There is no file size limit. You can transfer files of any size with maximum efficiency.</p>
          </FAQItem>
          <FAQItem>
            <h3>Is Polecony GDPR compliant?</h3>
            <p>Yes, Polecony is fully GDPR compliant and follows strict data protection guidelines.</p>
          </FAQItem>
          <FAQItem>
            <h3>How much does it cost?</h3>
            <p>Polecony offers flexible pricing plans starting with a free tier. Enterprise plans are available for larger teams.</p>
          </FAQItem>
        </FAQGrid>
      </Section>

      {/* Final CTA */}
      <CTASection>
        <h2>Ready to secure your files?</h2>
        <p>Join thousands of professionals who trust Polecony</p>
        <CTAButton to="/installation">
          <FiDownload /> Start Secure Sharing
        </CTAButton>
      </CTASection>
    </Container>
  )
}

const Container = styled.div`
  overflow: hidden;
`

const Hero = styled.section`
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
  color: white;
  padding: 8rem 2rem;
  min-height: 100vh;
  display: flex;
  align-items: center;
`

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`

const HeroText = styled.div`
  h1 {
    font-size: 4rem;
    line-height: 1.1;
    margin-bottom: 1.5rem;
  }

  p {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    opacity: 0.9;
  }
`

const HeroImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 968px) {
    display: none;
  }
`

const SecurityIcon = styled.div`
  font-size: 15rem;
  color: rgba(255, 255, 255, 0.2);
  animation: float 6s ease-in-out infinite;

  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
    100% { transform: translateY(0px); }
  }
`

const CTAButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background: white;
  color: var(--primary);
  padding: 1.25rem 2.5rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1.125rem;
  transition: all 0.2s;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
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
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.1);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.875rem;
`

const Section = styled.section`
  padding: 8rem 2rem;
  background: ${props => props.$alternate ? 'var(--gray-50)' : 'white'};
`

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 4rem;
  color: var(--text);
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
  }

  p {
    color: var(--text-light);
  }
`

const IconWrapper = styled.div`
  font-size: 2.5rem;
  color: var(--primary);
  margin-bottom: 1rem;
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
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-4px);
  }

  h3 {
    margin-bottom: 0.5rem;
  }

  p {
    color: var(--text-light);
  }
`

const FeatureIcon = styled.div`
  font-size: 2rem;
  color: var(--primary);
  flex-shrink: 0;
`

const FAQGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`

const FAQItem = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

  h3 {
    margin-bottom: 1rem;
    color: var(--primary);
  }

  p {
    color: var(--text-light);
  }
`

const CTASection = styled.section`
  text-align: center;
  padding: 6rem 2rem;
  background: var(--primary);
  color: white;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.25rem;
    margin-bottom: 2rem;
    opacity: 0.9;
  }
`

export default Home
