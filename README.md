### Hexlet tests and linter status:
[![Actions Status](https://github.com/reznikovAndrey/frontend-project-lvl4/workflows/hexlet-check/badge.svg)](https://github.com/reznikovAndrey/frontend-project-lvl4/actions) [![Eslint check](https://github.com/reznikovAndrey/frontend-project-lvl4/workflows/linter-check/badge.svg)](https://github.com/reznikovAndrey/frontend-project-lvl4/actions) [![Maintainability](https://api.codeclimate.com/v1/badges/a7068ee894d839d9f9f7/maintainability)](https://codeclimate.com/github/reznikovAndrey/frontend-project-lvl4/maintainability)

This project is simple implementation of minimal chat application, like Slack, etc. After registration you can managing (add, rename and remove) channels, add messages. 

You can check deployed project on [Heroku](https://boiling-wave-24818.herokuapp.com/).

Used technologies:
- [Web sockets](https://socket.io/)
- [React](https://reactjs.org/)
- [RTK](https://redux-toolkit.js.org/) for managing UI state.
- [React-router-v6](https://reactrouter.com/en/main) for routing.
- [React-bootstrap](https://react-bootstrap.github.io/) for layout.
- [React-toastify](https://www.npmjs.com/package/react-toastify) for notifications.
- [Formik](https://formik.org/) for managing forms.
- [Yup](https://www.npmjs.com/package/yup) for validation.
- [axios](https://axios-http.com/) for HTTP requests.
- [Rollbar](https://rollbar.com/) for monitoring deployed app.
- [i18next](https://www.i18next.com/) for manipulations with text.
- [Leo-profanity](https://www.npmjs.com/package/leo-profanity) for managing bad words.

## Installation
Clone project
```sh
git clone git@github.com:reznikovAndrey/frontend-project-lvl4.git
```

Go in project dir
```sh
cd frontend-project-lvl4
```

Install dependecies
```sh
make install
```

In case you need [rollbar](https://rollbar.com/) support, you need to create `.env`
```sh
cd frontend
echo 'REACT_APP_ROLLBAR_TOKEN=<ROLLBAR ACCESS TOKEN>' > .env
```

Start dev version:
```sh
make start
```

### Authors:
- Andrey Reznikov