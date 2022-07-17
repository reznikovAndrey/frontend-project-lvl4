import { Routes, Route } from 'react-router-dom';

import {
  HomePage, LoginPage, NotFoundPage, PrivatePage,
} from './pages';
import Navbar from './Navbar';
import { AuthProvider } from '../contexts';

const App = () => (
  <AuthProvider>
    <div className="d-flex flex-column h-100 bg-light">
      <Navbar />
      <Routes>
        <Route path="/" element={<PrivatePage><HomePage /></PrivatePage>} />
        <Route path="login" element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  </AuthProvider>
);

export default App;
