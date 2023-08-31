import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth-operations';
import css from './RegisterForm.module.css';
import { Input } from '@chakra-ui/react';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    // form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        Username
        <Input size="sm" type="text" name="name" />
      </label>
      <label className={css.label}>
        Email
        <Input size="sm" type="email" name="email" />
      </label>
      <label className={css.label}>
        Password
        <Input size="sm" type="password" name="password" />
      </label>
      <button type="submit" className={css.button}>
        Register
      </button>
    </form>
  );
};
