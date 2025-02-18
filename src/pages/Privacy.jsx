import React from 'react'
import styled from 'styled-components'

const Privacy = () => {
  return (
    <Container>
      <h1>Privacy Policy</h1>
      
      <Content>
        <Section>
          <h2>Introduction</h2>
          <p>At Polecony, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your personal information when you use our secure file-sharing service.</p>
        </Section>

        <Section>
          <h2>Information Collection</h2>
          <p>We collect only the minimum information necessary to provide our services:</p>
          <ul>
            <li>Email address for account creation</li>
            <li>Basic usage data for service operation</li>
            <li>Technical information for security purposes</li>
          </ul>
        </Section>

        <Section>
          <h2>Data Protection</h2>
          <p>Your files are protected using:</p>
          <ul>
            <li>End-to-end encryption</li>
            <li>Secure transmission protocols</li>
            <li>Regular security audits</li>
          </ul>
        </Section>

        <Section>
          <h2>Data Usage</h2>
          <p>We use your information solely for:</p>
          <ul>
            <li>Providing our file-sharing service</li>
            <li>Maintaining service security</li>
            <li>Improving user experience</li>
          </ul>
        </Section>

        <Section>
          <h2>Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access your personal data</li>
            <li>Request data deletion</li>
            <li>Export your data</li>
            <li>Modify your information</li>
          </ul>
        </Section>

        <Section>
          <h2>Contact Us</h2>
          <p>For privacy-related inquiries, please contact our Data Protection Officer at privacy@polecony.com.pl</p>
        </Section>
      </Content>
    </Container>
  )
}

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1rem;

  h1 {
    text-align: center;
    margin-bottom: 3rem;
  }
`

const Content = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

const Section = styled.section`
  margin-bottom: 2rem;

  h2 {
    color: var(--primary);
    margin-bottom: 1rem;
  }

  ul {
    list-style-position: inside;
    margin: 1rem 0;

    li {
      margin-bottom: 0.5rem;
    }
  }

  &:last-child {
    margin-bottom: 0;
  }
`

export default Privacy
