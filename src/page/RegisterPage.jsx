import { useDispatch } from 'react-redux';
import { signupUser } from '../redux/auth/auth-operations';

import RegisterForm from 'components/Forms/RegisterForm/RegisterForm';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const signup = obj => dispatch(signupUser(obj));
  return <RegisterForm onSubmit={signup} />;
};

export default RegisterPage;
