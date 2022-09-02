import i18next from 'i18next';
import { initReactI18next, I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { AuthProvider, SocketProvider } from './contexts';

import { en, ru } from './locales';
import store from './slices';

export default async (socket) => {
  const i18n = i18next.createInstance();

  await i18n.use(initReactI18next).init({
    lng: 'ru',
    fallbackLng: 'en',
    debug: true,
    resources: { en, ru },
  });

  return (
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <Provider store={store}>
          <AuthProvider>
            <SocketProvider socket={socket}>
              <App />
            </SocketProvider>
          </AuthProvider>
        </Provider>
      </BrowserRouter>
    </I18nextProvider>
  );
};
