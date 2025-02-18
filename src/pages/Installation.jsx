import React from 'react'
import styled from 'styled-components'
import { FiDownload, FiCheckCircle } from 'react-icons/fi'

const Installation = () => {
  return (
    <Container>
      <h1>Installation Guide</h1>
      
      <DownloadSection>
        <h2>Download Polecony</h2>
        <PlatformGrid>
          <PlatformCard>
            <h3>Windows</h3>
            <DownloadButton>
              <FiDownload /> Download for Windows
            </DownloadButton>
            <Requirements>
              <h4>System Requirements</h4>
              <ul>
                <li>Windows 10 or later</li>
                <li>4GB RAM</li>
                <li>100MB free space</li>
              </ul>
            </Requirements>
          </PlatformCard>

          <PlatformCard>
            <h3>macOS</h3>
            <DownloadButton>
              <FiDownload /> Download for macOS
            </DownloadButton>
            <Requirements>
              <h4>System Requirements</h4>
              <ul>
                <li>macOS 10.15 or later</li>
                <li>4GB RAM</li>
                <li>100MB free space</li>
              </ul>
            </Requirements>
          </PlatformCard>

          <PlatformCard>
            <h3>Linux</h3>
            <DownloadButton>
              <FiDownload /> Download for Linux
            </DownloadButton>
            <Requirements>
              <h4>System Requirements</h4>
              <ul>
                <li>Ubuntu 20.04 or later</li>
                <li>4GB RAM</li>
                <li>100MB free space</li>
              </ul>
            </Requirements>
          </PlatformCard>
        </PlatformGrid>
      </DownloadSection>

      <SetupSection>
        <h2>Setup Instructions</h2>
        <Steps>
          <Step>
            <StepIcon><FiCheckCircle /></StepIcon>
            <div>
              <h3>Download and Install</h3>
              <p>Download the appropriate version for your system and run the installer</p>
            </div>
          </Step>
          <Step>
            <StepIcon><FiCheckCircle /></StepIcon>
            <div>
              <h3>Create Account</h3>
              <p>Launch Polecony and create your secure account</p>
            </div>
          </Step>
          <Step>
            <StepIcon><FiCheckCircle /></StepIcon>
            <div>
              <h3>Start Sharing</h3>
              <p>Begin sharing files securely with your team</p>
            </div>
          </Step>
        </Steps>
      </SetupSection>
    </Container>
  )
}

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;

  h1 {
    text-align: center;
    margin-bottom: 3rem;
  }

  h2 {
    margin-bottom: 2rem;
  }
`

const DownloadSection = styled.section`
  margin-bottom: 4rem;
`

const PlatformGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`

const PlatformCard = styled.div`
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background: white;

  h3 {
    margin-bottom: 1rem;
  }
`

const DownloadButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--primary);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  width: 100%;
  justify-content: center;
  margin-bottom: 1.5rem;
  transition: background 0.2s;

  &:hover {
    background: var(--secondary);
  }
`

const Requirements = styled.div`
  h4 {
    margin-bottom: 0.5rem;
  }

  ul {
    list-style: none;
    
    li {
      margin-bottom: 0.25rem;
    }
  }
`

const SetupSection = styled.section`
  margin-bottom: 4rem;
`

const Steps = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

const Step = styled.div`
  display: flex;
  gap: 1rem;
  align-items: flex-start;

  h3 {
    margin-bottom: 0.5rem;
  }
`

const StepIcon = styled.div`
  color: var(--primary);
  font-size: 1.5rem;
`

export default Installation
