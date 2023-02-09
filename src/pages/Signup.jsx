import { useState } from 'react';
import AuthenticateForm from '../components/AuthenticateForm';
import { FormContainer } from '../styles/Container.styled';

function Signup() {
  const [error, setError] = useState(null);

  const handleSubmit = values => {
    console.log(values);
  };

  return (
    <FormContainer>
      <AuthenticateForm
        handleSubmit={handleSubmit}
        title='Signup'
        buttonText='Signup'
        error={error}
        linkText='Already have an account?'
      />
    </FormContainer>
  );
}

export default Signup;
