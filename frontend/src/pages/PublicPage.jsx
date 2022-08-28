import { Container, Row, Col } from 'react-bootstrap';
import { Navigate, Outlet } from 'react-router-dom';

import { useAuth } from '../hooks';
import routes from '../routes';

const PublicPage = () => {
  const { loggedIn } = useAuth();

  return loggedIn ? (
    <Navigate to={routes.homePage()} />
  ) : (
    <Container fluid className="flex-grow-1">
      <Row className="row justify-content-center align-content-center h-100">
        <Col md={8} xxl={6}>
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
};

export default PublicPage;
