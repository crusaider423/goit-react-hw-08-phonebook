import { useId, useState } from 'react';
import css from './login-form.module.css';

const LoginForm = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleInput = ({ target }) => {
    const { value, name } = target;
    name === 'email' ? setEmail(value) : setPassword(value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ email, password });
    setEmail('');
    setPassword('');
  };

  const emailId = useId();
  const passwordId = useId();
  return (
    <div className={css.container}>
      <div className={css.cover}>
        <form onSubmit={handleSubmit} className={css.form}>
          <label htmlFor={emailId} className={css.lable}>
            name
          </label>
          <input
            className={css.input}
            type="email"
            id={emailId}
            name="email"
            onChange={handleInput}
            value={email}
            placeholder='name'
            required
          />
          <label htmlFor={passwordId} className={css.lable}>
            password
          </label>
          <input
            className={css.input}
            type="password"
            id={passwordId}
            name="password"
            onChange={handleInput}
            value={password}
            placeholder='password'
            required
          />
          <button type="submit" className={css.btn}>Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
