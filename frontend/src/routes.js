const apiPrefix = 'api/v1';

export default {
  login: () => [apiPrefix, 'login'].join('/'),
  signup: () => [apiPrefix, 'signup'].join('/'),
  data: () => [apiPrefix, 'data'].join('/'),
  homePage: () => '/',
  loginPage: () => '/login',
  signupPage: () => '/signup',
};
