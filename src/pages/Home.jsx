import React from 'react'
import styled from 'styled-components'
import { FiShield, FiZap, FiLock, FiUsers, FiUploadCloud, FiShare2 } from 'react-icons/fi'

const Home = () => {
  return (
    <>
      <Hero>
        <HeroContent>
          <HeroText>
            <h1>Secure File Sharing Made Simple</h1>
            <p>Professional-grade security for your business communications</p>
            <CtaButton>Get Started</CtaButton>
          </HeroText>
          <HeroVisual>
            <IconWrapper>
              <FiUploadCloud />
              <AnimatedLine />
              <FiLock />
              <AnimatedLine />
              <FiShare2 />
            </IconWrapper>
          </HeroVisual>
        </HeroContent>
      </Hero>

      <Benefits>
        <h2>Why Choose Polecony?</h2>
        <BenefitsGrid>
          <BenefitCard>
            <FiShield />
            <h3>End-to-End Encryption</h3>
            <p>Your files are encrypted before they leave your device</p>
          </BenefitCard>
          <BenefitCard>
            <FiZap />
            <h3>Lightning Fast</h3>
            <p>Optimized for speed without compromising security</p>
          </BenefitCard>
          <BenefitCard>
            <FiLock />
            <h3>Privacy First</h3>
            <p>No tracking, no analytics, just secure file sharing</p>
          </BenefitCard>
          <BenefitCard>
            <FiUsers />
            <h3>Team Ready</h3>
            <p>Perfect for teams of any size</p>
          </BenefitCard>
        </BenefitsGrid>
      </Benefits>
    </>
  )
}

const Hero = styled.section`
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
  color: white;
  padding: 6rem 1rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='rgba(255,255,255,0.05)' fill-rule='evenodd'/%3E%3C/svg%3E");
    opacity: 0.5;
  }
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
    margin-bottom: 1.5rem;
    color: white;
  }

  p {
    font-size: 1.25rem;
    margin-bottom: 2rem;
    color: var(--accent);
  }
`

const HeroVisual = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 300px;

  @media (max-width: 968px) {
    display: none;
  }
`

const IconWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 2rem;

  svg {
    font-size: 4rem;
    padding: 1rem;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`

const AnimatedLine = styled.div`
  height: 2px;
  width: 60px;
  background: linear-gradient(90deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0.2) 100%);
  animation: pulse 2s infinite;

  @keyframes pulse {
    0% {
      opacity: 0.4;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0.4;
    }
  }
`

const CtaButton = styled.button`
  background: var(--white);
  color: var(--primary);
  padding: 1rem 2rem;
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

const Benefits = styled.section`
  padding: 6rem 1rem;
  text-align: center;
  background: var(--white);

  h2 {
    margin-bottom: 3rem;
    color: var(--text);
  }
`

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`

const BenefitCard = styled.div`
  padding: 2rem;
  background: var(--gray-50);
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-4px);
  }

  svg {
    font-size: 2.5rem;
    color: var(--primary);
    margin-bottom: 1rem;
  }

  h3 {
    margin-bottom: 1rem;
    color: var(--text);
  }

  p {
    color: var(--text-light);
  }
`

export default Home
