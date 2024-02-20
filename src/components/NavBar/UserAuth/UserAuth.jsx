import { NavLink } from 'react-router-dom';
import css from './user-auth.module.css';

const NavAuth = () => {
  return (
    <ul className={css.list}>
      <li>
        <NavLink to="/register" className={css.item}>
          Register
        </NavLink>
      </li>
      <span className={css.decore}>|</span>
      <li>
        <NavLink to="/login" className={css.item}>
          Login
        </NavLink>
      </li>
    </ul>
  );
};

export default NavAuth;
