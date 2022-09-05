import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { ReactComponent as NotFound } from '../assets/404.svg';
import routes from '../routes';

const NotFoundPage = () => {
  const { t } = useTranslation();

  return (
    <div className="text-center">
      <NotFound className="img-fluid h-25" alt={t('pages.notFound.imgAlt')} />
      <h1 className="h4 text-muted">{t('pages.notFound.header')}</h1>
      <p className="text-muted">
        {t('pages.notFound.text')}
        {' '}
        <Link to={routes.homePage()}>{t('pages.notFound.link')}</Link>
      </p>
    </div>
  );
};

export default NotFoundPage;
