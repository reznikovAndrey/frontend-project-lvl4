import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import {
  HomePage, LoginPage, NotFoundPage, PrivatePage,
} from './pages';
import { AuthProvider } from '../contexts';

const App = () => (
  <AuthProvider>
    <Container>
      <Routes>
        <Route path="/" element={<PrivatePage><HomePage /></PrivatePage>} />
        <Route path="login" element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Container>
  </AuthProvider>
);

export default App;
