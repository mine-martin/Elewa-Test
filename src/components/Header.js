import { Container, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const useStyles = () => ({});

const Header = () => {
  const classes = useStyles();

  return (
    <Head>
      <Navbar style={{ background: '#256eff', color: 'ffff' }}>
        <Container>SmartStore Billing Form</Container>
      </Navbar>
    </Head>
  );
};

export default Header;

const Head = styled.div`
  background: #256eff;
  color: #ffff;
  padding: 1rem 0;
  font-size: 1.5rem;
`;
