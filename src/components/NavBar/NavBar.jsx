import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import UserAuth from './UserAuth/UserAuth';
import UserMenu from './UserMenu/UserMenu';
import {
  selectIsLogin,
  selectIsLoading,
} from '../../redux/auth/auth-selectors';
import css from './nav-bar.module.css';
const NavBar = () => {
  const isLogin = useSelector(selectIsLogin);
  const isLoding = useSelector(selectIsLoading);
  return (
    <div className={css.header}>
      {!isLoding && (
        <div
          className={
            isLogin ? `${css.container} ${css.user}` : `${css.container}`
          }
        >
          {!isLogin && (
            <NavLink to="/" className={css.item}>
              Home
            </NavLink>
          )}
          {isLogin ? <UserMenu /> : <UserAuth />}
        </div>
      )}
    </div>
  );
};
export default NavBar;
