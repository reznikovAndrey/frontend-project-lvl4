import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Navbar from './components/Navbar';
import { HomePage, AuthPage, NotFoundPage, PrivatePage, PublicPage } from './pages';

import routes from './routes';

const App = () => (
  <div className="d-flex flex-column h-100 bg-light">
    <Navbar />
    <Routes>
      <Route path={routes.homePage()} element={<PrivatePage />}>
        <Route path="" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
      <Route path={routes.loginPage()} element={<PublicPage />}>
        <Route path="" element={<AuthPage type="login" />} />
      </Route>
      <Route path={routes.signupPage()} element={<PublicPage />}>
        <Route path="" element={<AuthPage type="signup" />} />
      </Route>
    </Routes>
    <ToastContainer />
  </div>
);

export default App;
