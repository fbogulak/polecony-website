import React from 'react'
import styled from 'styled-components'

const Privacy = () => {
  return (
    <Container>
      <h1>Polityka Prywatności</h1>
      
      <Content>
        <Section>
          <h2>Wprowadzenie</h2>
          <p>W Polecony traktujemy Twoją prywatność poważnie. Ta Polityka Prywatności wyjaśnia, w jaki sposób gromadzimy, wykorzystujemy i chronimy Twoje dane osobowe, gdy korzystasz z naszej usługi bezpiecznego udostępniania plików.</p>
        </Section>

        <Section>
          <h2>Gromadzenie Informacji</h2>
          <p>Gromadzimy tylko minimalne informacje niezbędne do świadczenia naszych usług:</p>
          <ul>
            <li>Adres e-mail do utworzenia konta</li>
            <li>Podstawowe dane użytkowania do obsługi usługi</li>
            <li>Informacje techniczne do celów bezpieczeństwa</li>
          </ul>
        </Section>

        <Section>
          <h2>Ochrona Danych</h2>
          <p>Twoje pliki są chronione za pomocą:</p>
          <ul>
            <li>Szyfrowania end-to-end</li>
            <li>Bezpiecznych protokołów transmisji</li>
            <li>Regularnych audytów bezpieczeństwa</li>
          </ul>
        </Section>

        <Section>
          <h2>Wykorzystanie Danych</h2>
          <p>Wykorzystujemy Twoje informacje wyłącznie do:</p>
          <ul>
            <li>Świadczenia usługi udostępniania plików</li>
            <li>Utrzymania bezpieczeństwa usługi</li>
            <li>Poprawy doświadczenia użytkownika</li>
          </ul>
        </Section>

        <Section>
          <h2>Twoje Prawa</h2>
          <p>Masz prawo do:</p>
          <ul>
            <li>Dostępu do swoich danych osobowych</li>
            <li>Żądania usunięcia danych</li>
            <li>Eksportu swoich danych</li>
            <li>Modyfikacji swoich informacji</li>
          </ul>
        </Section>

        <Section>
          <h2>Kontakt</h2>
          <p>W sprawach związanych z prywatnością prosimy o kontakt z naszym Inspektorem Ochrony Danych pod adresem privacy@polecony.com.pl</p>
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
