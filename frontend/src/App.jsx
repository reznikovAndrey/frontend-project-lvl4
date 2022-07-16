import { Routes, Route } from 'react-router-dom';
import { Home, Login, NotFound } from './components/pages';

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="login" element={<Login />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default App;
