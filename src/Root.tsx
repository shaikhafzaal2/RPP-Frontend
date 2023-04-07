import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useDispatch } from 'react-redux';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { selectUser } from 'selectors';
import styled, { ThemeProvider } from 'styled-components';
import { px } from 'styled-minimal';
import useTreeChanges from 'tree-changes-hook';
import { useAppSelector } from 'modules/hooks';
import theme, { headerHeight } from 'modules/theme';
import { name } from 'config';
import { showAlert } from 'actions';
import Header from 'components/Header';
import PrivateRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';
import SystemAlerts from 'containers/SystemAlerts';
import Login from 'routes/Login';
import NotFound from 'routes/NotFound';
import Dashboard from 'routes/Private';
import { UserState } from 'types';
import ProfileScreen from './routes/Profile';
import Footer from 'components/Footer';
// import { useIsAuthenticated } from '@azure/msal-react';

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  opacity: 1 !important;
  position: relative;
  transition: opacity 0.5s;
`;

const Main = styled.main<Pick<UserState, 'isLoggedIn'>>`
  min-height: 100vh;
  padding: ${({ isLoggedIn }) => (isLoggedIn ? `${px(headerHeight)} 0 0` : 0)};
`;

function Root() {
  const dispatch = useDispatch();
  const user = useAppSelector(selectUser);
  const { changed } = useTreeChanges(user);

  const isAuthenticated = user.isLoggedIn;

  // const isAuthenticated = useIsAuthenticated();
  console.log(isAuthenticated);

  useEffect(() => {
    if (changed('isAuthenticated', true)) {
      dispatch(showAlert('Hello! And welcome!', { variant: 'success', icon: 'bell', timeout: 10 }));
    }
  }, [dispatch, changed]);

  return (
    <HashRouter>
      <ThemeProvider theme={theme}>
        <AppWrapper data-testid="app">
          <Helmet
            defaultTitle={name}
            defer={false}
            encodeSpecialCharacters
            htmlAttributes={{ lang: 'pt-br' }}
            titleAttributes={{ itemprop: 'name', lang: 'pt-br' }}
            titleTemplate={`%s | ${name}`}
          >
            <link
              href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400;1,700&display=swap"
              rel="stylesheet"
            />
          </Helmet>
          {isAuthenticated && <Header />}
          <Main isLoggedIn={isAuthenticated}>
            <Routes>
              <Route
                element={
                  <PublicRoute isAuthenticated={isAuthenticated} to="/dashboard">
                    <Login />
                  </PublicRoute>
                }
                path="/"
              />
              <Route
                element={
                  <PrivateRoute isAuthenticated={isAuthenticated} to="/">
                    <Dashboard />
                  </PrivateRoute>
                }
                path="/dashboard"
              />
              <Route element={<ProfileScreen />} path="/profile" />
              <Route element={<NotFound />} path="*" />
            </Routes>
          </Main>
          <Footer />
          <SystemAlerts />
        </AppWrapper>
      </ThemeProvider>
    </HashRouter>
  );
}

export default Root;
