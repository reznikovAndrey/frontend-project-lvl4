import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { initReactI18next, I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App';
import { AuthProvider } from './contexts';
import store from './slices';

export default async () => {
  const i18n = i18next.createInstance();

  await i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init({
    fallbackLng: 'en',
    debug: true,
  });

  return (
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <Provider store={store}>
          <AuthProvider>
            <App />
          </AuthProvider>
        </Provider>
      </BrowserRouter>
    </I18nextProvider>
  );
};
