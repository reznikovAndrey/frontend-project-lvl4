import { Button, Navbar as BootstrapNavbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { useAuth } from '../hooks';

const Navbar = () => {
  const { loggedIn, logout } = useAuth();
  return (
    <BootstrapNavbar bg="white" expand="lg" className="shadow-sm">
      <div className="container">
        <BootstrapNavbar.Brand as={Link} to="/">Home</BootstrapNavbar.Brand>
        {loggedIn && <Button onClick={logout}>Logout</Button>}
      </div>
    </BootstrapNavbar>
  );
};

export default Navbar;
