import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import { HomePage, LoginPage, NotFoundPage, PrivatePage, PublicPage, SignupPage } from './pages';

import routes from './routes';

const App = () => (
  <div className="d-flex flex-column h-100 bg-light">
    <Navbar />
    <Routes>
      <Route path={routes.homePage()} element={<PrivatePage />}>
        <Route path="" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
      <Route
        path={routes.loginPage()}
        element={
          <PublicPage>
            <LoginPage />
          </PublicPage>
        }
      />
      <Route
        path={routes.signupPage()}
        element={
          <PublicPage>
            <SignupPage />
          </PublicPage>
        }
      />
    </Routes>
  </div>
);

export default App;
