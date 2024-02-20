import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLogin } from "../redux/auth/auth-selectors";
const style = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  // height: '100vh',
  fontSize: '45px',
};

const HomePage = () => {
  const isLogin=useSelector(selectIsLogin)
  if(isLogin)return <Navigate to='/contacts'/>
  return <h1 style={style}>There is home page</h1>;
};

export default HomePage;
