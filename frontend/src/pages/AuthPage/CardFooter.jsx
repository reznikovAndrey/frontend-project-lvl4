import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import routes from '../../routes';

const CardFooter = ({ type }) => {
  const { t } = useTranslation();

  return (
    <Card.Footer className="p-4">
      <div className="text-center">
        <span>{t(`pages.${type}.footerText`)}</span>{' '}
        <Link to={type === 'login' ? routes.signupPage() : routes.loginPage()}>{t(`pages.${type}.footerLink`)}</Link>
      </div>
    </Card.Footer>
  );
};

CardFooter.propTypes = {
  type: PropTypes.oneOf(['login', 'signup']).isRequired,
};

export default CardFooter;
