import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Navigate, Link } from 'react-router-dom';

import signupImage from '../../assets/signup.jpg';
import { useAuth } from '../../hooks';
import routes from '../../routes';
import { SignupForm } from '../forms';

const SignupPage = () => {
  const { loggedIn } = useAuth();

  const { t } = useTranslation();

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
                  <Image roundedCircle alt="login-header" src={signupImage} />
                </Col>
                <Col md={6} className="mt-3 mt-mb-0">
                  <SignupForm />
                </Col>
              </Row>
            </Card.Body>
            <Card.Footer className="p-4">
              <div className="text-center">
                <span>{t('signupPage.footerText')}</span>{' '}
                <Link to={routes.loginPage()}>{t('signupPage.footerLink')}</Link>
              </div>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SignupPage;
