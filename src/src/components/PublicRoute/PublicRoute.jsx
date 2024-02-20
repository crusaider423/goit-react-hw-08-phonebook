import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectToken, selectIsLogin } from '../../redux/auth/auth-selectors';

const PublicRoute = () => {
  const islogin = useSelector(selectIsLogin);
  const isToken = useSelector(selectToken);

  if (!islogin && isToken) return <p>....loding</p>;
  if (islogin) return <Navigate to="/contacts" />;

  return <Outlet />;
};

export default PublicRoute;
