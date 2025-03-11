import React, { useState } from 'react'
import styled from 'styled-components'
import { FiDownload, FiChevronDown, FiChevronUp, FiCheck, FiMonitor } from 'react-icons/fi'
import { usePlatform } from '../hooks/usePlatform'

const Installation = () => {
  const detectedPlatform = usePlatform()
  const [selectedPlatform, setSelectedPlatform] = useState(detectedPlatform)
  const [showPlatformSelector, setShowPlatformSelector] = useState(false)

  const platforms = {
    windows: {
      name: 'Windows',
      version: '1.0.0',
      requirements: ['Windows 10 lub nowszy', '4GB RAM', '100MB wolnego miejsca'],
      steps: [
        'Pobierz instalator (.exe)',
        'Uruchom instalator z uprawnieniami administratora',
        'Postępuj zgodnie z krokami kreatora instalacji',
        'Uruchom Polecony z menu Start'
      ]
    },
    macos: {
      name: 'macOS',
      version: '1.0.0',
      requirements: ['macOS 10.15 lub nowszy', '4GB RAM', '100MB wolnego miejsca'],
      steps: [
        'Pobierz plik .dmg',
        'Otwórz plik .dmg',
        'Przeciągnij Polecony do folderu Aplikacje',
        'Uruchom Polecony z folderu Aplikacje'
      ]
    },
    linux: {
      name: 'Linux',
      version: '1.0.0',
      requirements: ['Ubuntu 20.04 lub nowszy', '4GB RAM', '100MB wolnego miejsca'],
      steps: [
        'Pobierz plik .AppImage',
        'Nadaj plikowi uprawnienia wykonywania (chmod +x)',
        'Kliknij dwukrotnie, aby uruchomić',
        'Opcjonalnie: Utwórz skrót na pulpicie'
      ]
    },
    android: {
      name: 'Android',
      version: '1.0.0',
      requirements: ['Android 8.0 lub nowszy', '2GB RAM', '50MB wolnego miejsca'],
      steps: [
        'Odwiedź Sklep Google Play',
        'Wyszukaj "Polecony"',
        'Dotknij Zainstaluj',
        'Otwórz aplikację po instalacji'
      ]
    },
    ios: {
      name: 'iOS',
      version: '1.0.0',
      requirements: ['iOS 14.0 lub nowszy', '2GB RAM', '50MB wolnego miejsca'],
      steps: [
        'Odwiedź App Store',
        'Wyszukaj "Polecony"',
        'Dotknij Pobierz/Zainstaluj',
        'Otwórz aplikację po instalacji'
      ]
    }
  }

  const handlePlatformSelect = (platform) => {
    setSelectedPlatform(platform)
    setShowPlatformSelector(false)
    // Scroll to top of the page when platform changes
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentPlatformData = platforms[selectedPlatform] || platforms.windows

  return (
    <Container>
      <h1>Pobierz Polecony</h1>
      
      {/* Platform Selector */}
      <PlatformSelector>
        <CurrentPlatform onClick={() => setShowPlatformSelector(!showPlatformSelector)}>
          <PlatformIcon><FiMonitor /></PlatformIcon>
          <span>Wybrana platforma: <strong>{currentPlatformData.name}</strong></span>
          {showPlatformSelector ? <FiChevronUp /> : <FiChevronDown />}
        </CurrentPlatform>
        
        {showPlatformSelector && (
          <PlatformOptions>
            {Object.entries(platforms).map(([key, platform]) => (
              <PlatformOption 
                key={key} 
                $isActive={key === selectedPlatform}
                onClick={() => handlePlatformSelect(key)}
              >
                {platform.name}
                {key === selectedPlatform && <FiCheck />}
              </PlatformOption>
            ))}
          </PlatformOptions>
        )}
      </PlatformSelector>
      
      {/* Current Platform Section */}
      <MainDownloadSection>
        <DownloadCard>
          <h2>Pobierz dla {currentPlatformData.name}</h2>
          <DownloadButtonContainer>
            <DownloadButton>
              <FiDownload /> 
              <span>Pobierz dla {currentPlatformData.name}</span>
            </DownloadButton>
            <VersionLabel>v{currentPlatformData.version}</VersionLabel>
          </DownloadButtonContainer>
          <Requirements>
            <h3>Wymagania systemowe</h3>
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
          <h2>Instrukcje instalacji</h2>
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

const PlatformSelector = styled.div`
  max-width: 800px;
  margin: 0 auto 2rem;
  position: relative;
`

const CurrentPlatform = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.5rem;
  background: var(--white);
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: var(--gray-50);
  }

  span {
    flex-grow: 1;
    color: var(--text);
  }

  svg:last-child {
    color: var(--primary);
    font-size: 1.25rem;
  }
`

const PlatformIcon = styled.div`
  color: var(--primary);
  font-size: 1.5rem;
  display: flex;
  align-items: center;
`

const PlatformOptions = styled.div`
  position: absolute;
  top: calc(100% + 0.5rem);
  left: 0;
  right: 0;
  background: var(--white);
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  z-index: 10;
  overflow: hidden;
`

const PlatformOption = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  cursor: pointer;
  transition: background-color 0.2s;
  background-color: ${props => props.$isActive ? 'var(--gray-50)' : 'transparent'};
  color: ${props => props.$isActive ? 'var(--primary)' : 'var(--text)'};

  &:hover {
    background-color: var(--gray-50);
  }

  svg {
    color: var(--primary);
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

const DownloadButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
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
  transition: all 0.2s;<boltAction type="file" filePath="src/pages/Installation.jsx">  width: 100%;
  justify-content: center;
  border: none;
  cursor: pointer;

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

const VersionLabel = styled.div`
  font-size: 0.875rem;
  color: var(--text-light);
  text-align: right;
  padding-right: 0.5rem;
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

export default Installation
