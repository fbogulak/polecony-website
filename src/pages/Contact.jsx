import React from 'react'
import styled from 'styled-components'
import { FiMail, FiClock } from 'react-icons/fi'

const Contact = () => {
  return (
    <Container>
      <h1>Kontakt</h1>

      <Content>
        <ContactInfo>
          <InfoCard>
            <FiMail />
            <h3>Wsparcie Email</h3>
            <p>support@polecony.com.pl</p>
          </InfoCard>

          <InfoCard>
            <FiClock />
            <h3>Godziny Pracy</h3>
            <p>Poniedziałek - Piątek</p>
            <p>9:00 - 17:00 CET</p>
          </InfoCard>
        </ContactInfo>

        <ContactForm>
          <h2>Wyślij nam wiadomość</h2>
          <Form>
            <FormGroup>
              <label htmlFor="name">Imię i nazwisko</label>
              <input type="text" id="name" required />
            </FormGroup>

            <FormGroup>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" required />
            </FormGroup>

            <FormGroup>
              <label htmlFor="subject">Temat</label>
              <input type="text" id="subject" required />
            </FormGroup>

            <FormGroup>
              <label htmlFor="message">Wiadomość</label>
              <textarea id="message" rows="5" required></textarea>
            </FormGroup>

            <SubmitButton type="submit">Wyślij Wiadomość</SubmitButton>
          </Form>
        </ContactForm>
      </Content>
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
`

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

const InfoCard = styled.div`
  padding: 2rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;

  svg {
    font-size: 2rem;
    color: var(--primary);
    margin-bottom: 1rem;
  }

  h3 {
    margin-bottom: 0.5rem;
  }
`

const ContactForm = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  h2 {
    margin-bottom: 2rem;
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  label {
    font-weight: 500;
  }

  input, textarea {
    padding: 0.75rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-family: inherit;

    &:focus {
      outline: none;
      border-color: var(--primary);
    }
  }
`

const SubmitButton = styled.button`
  background: var(--primary);
  color: white;
  padding: 1rem;
  border-radius: 4px;
  font-weight: 500;
  transition: background 0.2s;

  &:hover {
    background: var(--secondary);
  }
`

export default Contact
