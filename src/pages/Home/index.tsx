import { ReactComponent as MontsLogo } from '../../assets/images/logo.svg'
import { Container } from './styles'

export const Home: React.FC = () => {
  return (
    <Container>
      <a href="https://monts.com.br" target="_blank" rel="noopener noreferrer">
        <MontsLogo />
      </a>

      <h1>Welcome to Kedros React</h1>

      <p>
        A ReactJS structure made by{' '}
        <a
          href="https://monts.com.br"
          target="_blank"
          rel="noopener noreferrer"
        >
          Monts
        </a>
      </p>
    </Container>
  )
}
