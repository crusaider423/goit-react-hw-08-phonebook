import { useDispatch } from 'react-redux';
import { loginUser } from '../redux/auth/auth-operations';
import LoginForm from 'components/Forms/LoginForm/LoginForm';

const LoginPage = () => {
  const dispath = useDispatch();
  const login = obj => dispath(loginUser(obj));
  return <LoginForm onSubmit={login} />;
};

export default LoginPage;
