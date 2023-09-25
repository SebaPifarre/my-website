import { Container, Row, Col } from "react-bootstrap";
import Logo from "./logo";

const Home = () => {
  return (
    <Container>
      <Row className="align-items-center">
        <Col xs={12} md={6} xl={7} className="text-left">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Col>
        <Col xs={12} md={6} xl={5} className="text-right">
          <Logo />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
