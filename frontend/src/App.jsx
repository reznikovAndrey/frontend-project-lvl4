import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import {
  Home, Login, NotFound, Private,
} from './pages';
import { AuthProvider } from './AuthContext';

const App = () => (
  <AuthProvider>
    <Container>
      <Routes>
        <Route path="/" element={<Private><Home /></Private>} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
  </AuthProvider>
);

export default App;
