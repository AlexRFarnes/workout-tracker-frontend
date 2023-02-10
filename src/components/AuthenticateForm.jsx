import { Formik, Form } from 'formik';
import { Link } from 'react-router-dom';
import { Error } from '../styles/Error';
import { PrimaryButton } from '../styles/Button.styled';
import CustomField from './CustomField';
import UserSchema from '../validation/userValidation';

function AuthenticateForm({
  handleSubmit,
  title,
  buttonText,
  error,
  linkText,
}) {
  return (
    <>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={handleSubmit}
        validationSchema={UserSchema}>
        {formik => (
          <Form>
            <h3>{title}</h3>
            <CustomField
              placeholder='Email'
              type='email'
              id='email'
              name='email'
              label='Email'
              required={true}
            />
            <CustomField
              placeholder='Password'
              type='password'
              id='password'
              name='password'
              label='Password'
              required={true}
            />
            <PrimaryButton
              disabled={formik.isSubmitting || !formik.isValid}
              type='submit'>
              {buttonText}
            </PrimaryButton>
            {error && <Error style={{ marginTop: '10px' }}>{error}</Error>}
          </Form>
        )}
      </Formik>
      <p>
        {linkText}{' '}
        <Link to={title === 'Login' ? '/signup' : '/login'}>
          {title === 'Login' ? 'Signup' : 'Login'}
        </Link>
      </p>
    </>
  );
}

export default AuthenticateForm;
