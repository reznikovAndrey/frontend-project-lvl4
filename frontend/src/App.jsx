import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import { Home, Login, NotFound } from './pages';

const App = () => (
  <Container>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Container>
);

export default App;
