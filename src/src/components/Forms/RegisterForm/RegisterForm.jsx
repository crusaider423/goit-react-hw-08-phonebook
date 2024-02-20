import { useId } from 'react';
import { useState } from 'react';
import css from './register-form.module.css'

const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
};

const RegisterForm = ({ onSubmit }) => {
  const [state, setState] = useState(INITIAL_STATE);

  const handleInput = ({ target }) => {
    const { value, name } = target;

    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(state);
    setState(INITIAL_STATE);
  };

  const nameId = useId();
  const emailId = useId();
  const passwordId = useId();
  const { name, email, password } = state;
  return (
   <div className={css.container}>
     <div className={css.cover}>
        <form onSubmit={handleSubmit} className={css.form}>
          <label htmlFor={nameId}className={css.lable}>Name</label>
          <input className={css.input}
            type="text"
            name="name"
            id={nameId}
            onChange={handleInput}
            value={name}
            placeholder="name"
            required
          />
          <label htmlFor={emailId}className={css.lable}>Email</label>
          <input className={css.input}
            type="email"
            name="email"
            id={emailId}
            onChange={handleInput}
            value={email}
            placeholder="email"
            required
          />
          <label htmlFor={passwordId}className={css.lable}>Passward</label>
          <input className={css.input}
            type="text"
            name="password"
            id={passwordId}
            onChange={handleInput}
            value={password}
            placeholder="password"
            required
          />
          <button type="submit" className={css.btn}>Signup</button>
        </form>
     </div>
   </div>
  );
};
export default RegisterForm;
