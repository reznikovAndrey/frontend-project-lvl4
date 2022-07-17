const apiPrefix = 'api/v1';

export default {
  login: () => [apiPrefix, 'login'].join('/'),
  data: () => [apiPrefix, 'data'].join('/'),
};
