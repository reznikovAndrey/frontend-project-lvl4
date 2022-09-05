import PropTypes from 'prop-types';
import React from 'react';
import {
  Row, Col, Card, Image,
} from 'react-bootstrap';

import loginImage from '../../assets/login.jpg';
import signupImage from '../../assets/signup.jpg';
import { LoginForm, SignupForm } from '../../components/forms';

const CardBody = ({ type }) => (
  <Card.Body>
    <Row className="p-5">
      <Col md={6} className="d-flex align-items-center justify-content-center">
        <Image roundedCircle alt="login-header" src={type === 'login' ? loginImage : signupImage} />
      </Col>
      <Col md={6} className="mt-3 mt-mb-0">
        {type === 'login' ? <LoginForm /> : <SignupForm />}
      </Col>
    </Row>
  </Card.Body>
);

CardBody.propTypes = {
  type: PropTypes.oneOf(['login', 'signup']).isRequired,
};

export default CardBody;
