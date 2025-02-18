import React, { useState } from 'react'
import styled from 'styled-components'
import { FiDownload, FiChevronDown, FiChevronUp, FiCheck } from 'react-icons/fi'
import { usePlatform } from '../hooks/usePlatform'

const Installation = () => {
  const [showOtherPlatforms, setShowOtherPlatforms] = useState(false)
  const currentPlatform = usePlatform()

  const platforms = {
    windows: {
      name: 'Windows',
      version: '1.0.0',
      requirements: ['Windows 10 or later', '4GB RAM', '100MB free space'],
      steps: [
        'Download the installer (.exe)',
        'Run the installer with administrator privileges',
        'Follow the installation wizard steps',
        'Launch Polecony from the Start menu'
      ]
    },
    macos: {
      name: 'macOS',
      version: '1.0.0',
      requirements: ['macOS 10.15 or later', '4GB RAM', '100MB free space'],
      steps: [
        'Download the .dmg file',
        'Open the .dmg file',
        'Drag Polecony to Applications folder',
        'Launch Polecony from Applications'
      ]
    },
    linux: {
      name: 'Linux',
      version: '1.0.0',
      requirements: ['Ubuntu 20.04 or later', '4GB RAM', '100MB free space'],
      steps: [
        'Download the .AppImage file',
        'Make the file executable (chmod +x)',
        'Double-click to run',
        'Optional: Create desktop shortcut'
      ]
    },
    android: {
      name: 'Android',
      version: '1.0.0',
      requirements: ['Android 8.0 or later', '2GB RAM', '50MB free space'],
      steps: [
        'Visit Google Play Store',
        'Search for "Polecony"',
        'Tap Install',
        'Open the app after installation'
      ]
    },
    ios: {
      name: 'iOS',
      version: '1.0.0',
      requirements: ['iOS 14.0 or later', '2GB RAM', '50MB free space'],
      steps: [
        'Visit App Store',
        'Search for "Polecony"',
        'Tap Get/Install',
        'Open the app after installation'
      ]
    }
  }

  const currentPlatformData = platforms[currentPlatform] || platforms.windows

  return (
    <Container>
      <h1>Download Polecony</h1>
      
      {/* Current Platform Section */}
      <MainDownloadSection>
        <DownloadCard>
          <h2>Download for {currentPlatformData.name}</h2>
          <DownloadButton>
            <FiDownload /> 
            <span>Download for {currentPlatformData.name}</span>
            <Version>v{currentPlatformData.version}</Version>
          </DownloadButton>
          <Requirements>
            <h3>System Requirements</h3>
            <RequirementsList>
              {currentPlatformData.requirements.map((req, index) => (
                <RequirementItem key={index}>
                  <FiCheck /> {req}
                </RequirementItem>
              ))}
            </RequirementsList>
          </Requirements>
        </DownloadCard>

        {/* Installation Steps */}
        <SetupInstructions>
          <h2>Setup Instructions</h2>
          <StepsList>
            {currentPlatformData.steps.map((step, index) => (
              <StepItem key={index}>
                <StepNumber>{index + 1}</StepNumber>
                <StepText>{step}</StepText>
              </StepItem>
            ))}
          </StepsList>
        </SetupInstructions>
      </MainDownloadSection>

      {/* Other Platforms Section */}
      <OtherPlatforms>
        <OtherPlatformsHeader onClick={() => setShowOtherPlatforms(!showOtherPlatforms)}>
          <h2>Other Platforms</h2>
          {showOtherPlatforms ? <FiChevronUp /> : <FiChevronDown />}
        </OtherPlatformsHeader>
        
        <PlatformGrid $show={showOtherPlatforms}>
          {Object.entries(platforms)
            .filter(([key]) => key !== currentPlatform)
            .map(([key, platform]) => (
              <PlatformCard key={key}>
                <h3>{platform.name}</h3>
                <DownloadButton>
                  <FiDownload />
                  <span>Download for {platform.name}</span>
                  <Version>v{platform.version}</Version>
                </DownloadButton>
                <Requirements>
                  <h4>System Requirements</h4>
                  <RequirementsList>
                    {platform.requirements.map((req, index) => (
                      <RequirementItem key={index}>
                        <FiCheck /> {req}
                      </RequirementItem>
                    ))}
                  </RequirementsList>
                </Requirements>
              </PlatformCard>
            ))}
        </PlatformGrid>
      </OtherPlatforms>
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
    color: var(--text);
  }
`

const MainDownloadSection = styled.div`
  max-width: 800px;
  margin: 0 auto 3rem;
`

const DownloadCard = styled.div`
  background: var(--white);
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  border: 2px solid var(--primary);
  margin-bottom: 2rem;

  h2 {
    margin-bottom: 1.5rem;
    color: var(--text);
  }
`

const DownloadButton = styled.button`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  background: var(--primary);
  color: var(--white);
  padding: 1.25rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1.125rem;
  transition: all 0.2s;
  width: 100%;
  justify-content: center;
  position: relative;

  svg {
    font-size: 1.5rem;
  }

  &:hover {
    background: var(--primary-dark);
    transform: translateY(-2px);
  }

  @media (max-width: 480px) {
    padding: 1rem 1.5rem;
    gap: 0.75rem;
    font-size: 1rem;
  }
`

const Version = styled.span`
  position: absolute;
  right: 1.5rem;
  font-size: 0.875rem;
  opacity: 0.8;
`

const Requirements = styled.div`
  margin-top: 2rem;

  h3, h4 {
    margin-bottom: 1rem;
    color: var(--text);
  }
`

const RequirementsList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

const RequirementItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--text-light);
  margin-bottom: 0.75rem;

  svg {
    color: var(--primary);
    flex-shrink: 0;
  }
`

const SetupInstructions = styled.section`
  background: var(--white);
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

  h2 {
    margin-bottom: 2rem;
    color: var(--text);
  }
`

const StepsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

const StepItem = styled.div`
  display: flex;
  gap: 1rem;
  align-items: flex-start;
`

const StepNumber = styled.div`
  background: var(--primary);
  color: white;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  flex-shrink: 0;
`

const StepText = styled.div`
  color: var(--text-light);
  padding-top: 0.25rem;
`

const OtherPlatforms = styled.section`
  background: var(--white);
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  margin-top: 3rem;
`

const OtherPlatformsHeader = styled.div`
  padding: 1.5rem 2.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: var(--gray-50);
  }

  h2 {
    margin: 0;
    font-size: 1.5rem;
    color: var(--text);
  }

  svg {
    font-size: 1.25rem;
    color: var(--primary);
  }
`

const PlatformGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  padding: ${props => props.$show ? '1.5rem 2.5rem 2.5rem' : '0'};
  max-height: ${props => props.$show ? '2000px' : '0'};
  opacity: ${props => props.$show ? '1' : '0'};
  transition: all 0.3s ease-in-out;
  overflow: hidden;
`

const PlatformCard = styled.div`
  padding: 1.5rem;
  border: 1px solid var(--gray-100);
  border-radius: 8px;

  h3 {
    margin-bottom: 1rem;
    color: var(--text);
  }
`

export default Installation
