import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';

import avatarImages from '../../assets/avatar.jpg';
import { useAuth } from '../../hooks';
import routes from '../../routes';
import { LoginForm } from '../forms';

const LoginPage = () => {
  const { loggedIn } = useAuth();

  return loggedIn ? (
    <Navigate to={routes.homePage()} />
  ) : (
    <Container fluid className="flex-grow-1">
      <Row className="row justify-content-center align-content-center h-100">
        <Col md={8} xxl={6}>
          <Card>
            <Card.Body>
              <Row className="p-5">
                <Col md={6} className="d-flex align-items-center justify-content-center">
                  <Image roundedCircle alt="login-header" src={avatarImages} />
                </Col>
                <Col md={6} className="mt-3 mt-mb-0">
                  <LoginForm />
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
