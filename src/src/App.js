import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { currentUser } from './redux/auth/auth-operations';
import AppRouts from 'AppRouts';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);
  return <AppRouts />;
};

export default App;
