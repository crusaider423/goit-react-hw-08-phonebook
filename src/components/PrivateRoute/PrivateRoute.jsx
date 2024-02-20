import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectToken, selectIsLogin } from '../../redux/auth/auth-selectors';

const PrivateRoute = () => {
  const islogin = useSelector(selectIsLogin);
  const isToken = useSelector(selectToken);
  if (!islogin && isToken) return <p>....loding</p>;

  if (!islogin && !isToken) return <Navigate to="/login" />;

  return <Outlet />;
};

export default PrivateRoute;
