import { useState } from 'react';
import AuthenticateForm from '../components/AuthenticateForm';
import { FormContainer } from '../styles/Container.styled';

function Login() {
  const [error, setError] = useState(null);

  const handleSubmit = values => {
    console.log(values);
  };

  return (
    <FormContainer>
      <AuthenticateForm
        handleSubmit={handleSubmit}
        title='Login'
        buttonText='Login'
        error={error}
        linkText='Not registered?'
      />
    </FormContainer>
  );
}

export default Login;
