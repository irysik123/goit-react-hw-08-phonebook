import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/auth-operations';
import css from './LoginForm.module.css';
import { Input } from '@chakra-ui/react'

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    // form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        Email
        <Input size='sm' type="email" name="email" />
      </label>
      <label className={css.label}>
        Password
        <Input size='sm' type="password" name="password" className={css.input} />
      </label>
      <button type="submit" className={css.button}>Log In</button>
    </form>
  );
};