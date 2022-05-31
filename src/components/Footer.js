import { Container, Navbar } from 'react-bootstrap'

const Footer = () => {
  return (
    <div>
      <Navbar fixed='bottom' variant='light' bg='light'>
        <Container>
          copyright &copy; Martin Wangondu
          <a href='wangondumn@gmail.com'>Email</a>
        </Container>
      </Navbar>
    </div>
  )
}

export default Footer
