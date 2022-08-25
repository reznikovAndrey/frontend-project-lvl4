import { Row, Col, Card, Image } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import signupImage from '../assets/signup.jpg';
import { SignupForm } from '../components/forms';
import routes from '../routes';

const SignupPage = () => {
  const { t } = useTranslation();

  return (
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
          <span>{t('pages.signup.footerText')}</span>{' '}
          <Link to={routes.loginPage()}>{t('pages.signup.footerLink')}</Link>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default SignupPage;
