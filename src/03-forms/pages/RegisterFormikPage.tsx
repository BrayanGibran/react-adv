import '../styles/styles.css';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { MyTextInput } from '../components';

export const RegisterFormikPage = () => {
  return (
    <div>
      <h1>Register Formik Page</h1>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
          repeatPassword: '',
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(2, 'Debe de tener minimo 3 caracteres')
            .max(15, 'Debe tener 15 caracteres o menos')
            .required('Requerido'),
          email: Yup.string().email('Email invalido').required('Requerido'),
          password: Yup.string()
            .min(6, 'Debe de tener minimo 6 caracteres')
            .required('Requerido'),
          repeatPassword: Yup.string()
            .oneOf([Yup.ref('password')], 'Las contraseñas deben ser iguales')
            .required('Requerido'),
        })}
      >
        {({ handleReset }) => (
          <Form>
            <MyTextInput label='Name' name='name' placeholder='Name' />
            <MyTextInput
              label='Email'
              name='email'
              placeholder='Email'
              type='email'
            />
            <MyTextInput
              label='Password'
              name='password'
              placeholder='******'
              type='password'
            />
            <MyTextInput
              label='Repeat Password'
              name='repeatPassword'
              placeholder='******'
              type='password'
            />

            <button type='submit'>Create</button>
            <button onClick={handleReset} type='button'>
              Reset Form
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
