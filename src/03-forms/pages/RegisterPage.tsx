import { FormEvent } from 'react';
import '../styles/styles.css';
import { useForm } from '../hooks/useForm';

export const RegisterPage = () => {
  const {
    name,
    email,
    password,
    repeatPassword,
    onChange,
    resetForm,
    isValidEmail,
  } = useForm({
    name: '',
    email: '',
    password: '',
    repeatPassword: '',
  });

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div>
      <h1>RegisterPage</h1>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          placeholder='Name'
          value={name}
          onChange={onChange}
          name='name'
          className={`${name.trim().length <= 0 && 'has-error'}`}
        />
        {name.trim().length <= 0 && <span>Este campo es necesario</span>}

        <input
          type='email'
          placeholder='Email'
          value={email}
          onChange={onChange}
          name='email'
          className={`${!isValidEmail(email) && 'has-error'}`}
        />
        {!isValidEmail(email) && <span>Email no valido</span>}
        <input
          type='password'
          placeholder='password'
          value={password}
          onChange={onChange}
          name='password'
        />
        {password.trim().length <= 0 && <span>Este campo es necesario</span>}
        {password.trim().length < 6 && password.trim().length > 0 && (
          <span>La contraseña debe tener minimo 6 caracteres</span>
        )}

        <input
          type='password'
          placeholder='Repeat Password'
          value={repeatPassword}
          onChange={onChange}
          name='repeatPassword'
        />
        {repeatPassword.trim().length <= 0 && (
          <span>Este campo es necesario</span>
        )}
        {repeatPassword.trim().length > 0 && repeatPassword !== password && (
          <span>Las contraseñas deben de ser iguales</span>
        )}

        <button type='submit'>Create</button>
        <button onClick={resetForm} type='button'>
          Reset Form
        </button>
      </form>
    </div>
  );
};
