import { Container, Row, Col, Card } from 'react-bootstrap';

import CardBody from './CardBody';
import CardFooter from './CardFooter';

const AuthPage = ({ type }) => (
  <Container fluid className="flex-grow-1">
    <Row className="row justify-content-center align-content-center h-100">
      <Col md={8} xxl={6}>
        <Card>
          <CardBody type={type} />
          <CardFooter type={type} />
        </Card>
      </Col>
    </Row>
  </Container>
);

export default AuthPage;
