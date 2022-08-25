import { Row, Col, Card, Image } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import loginImage from '../assets/login.jpg';
import { LoginForm } from '../components/forms';
import routes from '../routes';

const LoginPage = () => {
  const { t } = useTranslation();

  return (
    <Card>
      <Card.Body>
        <Row className="p-5">
          <Col md={6} className="d-flex align-items-center justify-content-center">
            <Image roundedCircle alt="login-header" src={loginImage} />
          </Col>
          <Col md={6} className="mt-3 mt-mb-0">
            <LoginForm />
          </Col>
        </Row>
      </Card.Body>
      <Card.Footer className="p-4">
        <div className="text-center">
          <span>{t('pages.login.footerText')}</span> <Link to={routes.signupPage()}>{t('pages.login.footerLink')}</Link>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default LoginPage;
