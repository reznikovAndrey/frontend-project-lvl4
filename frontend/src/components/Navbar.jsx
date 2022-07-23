import { Button, Navbar as BootstrapNavbar } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { useAuth } from '../hooks';

const Navbar = () => {
  const { loggedIn, logout } = useAuth();
  const { t } = useTranslation();
  return (
    <BootstrapNavbar bg="white" expand="lg" className="shadow-sm">
      <div className="container">
        <BootstrapNavbar.Brand as={Link} to="/">
          {t('nav.logo')}
        </BootstrapNavbar.Brand>
        {loggedIn && <Button onClick={logout}>{t('nav.logoutButtonText')}</Button>}
      </div>
    </BootstrapNavbar>
  );
};

export default Navbar;
