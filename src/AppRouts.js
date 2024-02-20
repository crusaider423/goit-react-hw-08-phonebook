import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import SharedLayout from './components/SharedLayout/SharedLayout.jsx';

const HomePage = lazy(() => import('./page/HomePage.jsx'));
const PrivateRoute = lazy(() =>
  import('./components/PrivateRoute/PrivateRoute.jsx')
);
const PublicRoute = lazy(() =>
  import('./components/PublicRoute/PublicRoute.jsx')
);
const ContactsPage = lazy(() => import('./page/ContactsPage.jsx'));
const LoginPage = lazy(() => import('./page/LoginPage.jsx'));
const RegisterPage = lazy(() => import('./page/RegisterPage.jsx'));
const NotFoundPage = lazy(() => import('./page/NotFoundPage'));

const AppRouts = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route element={<PrivateRoute />}>
          <Route path="/contacts" element={<ContactsPage />} />
        </Route>
        <Route element={<PublicRoute />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouts;
