import { useDispatch } from 'react-redux';
import { logoutUser } from '../../../redux/auth/auth-operations';
import css from './user-menu.module.css';

const UserMenu = () => {
  const dispatch =useDispatch()
  const hendaleLogout=()=>dispatch(logoutUser())
  return (
    <ul className={css.cover} >
      <li>
        <a className={css.link} href="mailto:mango@mail.com">
          mango@mail.com
        </a>
      </li>
      <li>
        <button type="button" onClick={hendaleLogout}>Logout</button>
      </li>
    </ul>
  );
};

export default UserMenu;
