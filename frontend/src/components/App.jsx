import { Routes, Route } from 'react-router-dom';

import Navbar from './Navbar';
import { HomePage, LoginPage, NotFoundPage, PrivatePage } from './pages';

import routes from '../routes';

const App = () => (
  <div className="d-flex flex-column h-100 bg-light">
    <Navbar />
    <Routes>
      <Route path={routes.homePage()} element={<PrivatePage />}>
        <Route path="" element={<HomePage />} />
      </Route>
      <Route path={routes.loginPage()} element={<LoginPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </div>
);

export default App;
