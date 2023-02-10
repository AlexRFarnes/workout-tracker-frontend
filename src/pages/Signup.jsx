import AuthenticateForm from '../components/AuthenticateForm';
import { useSignup } from '../hooks/useSignup';
import { FormContainer } from '../styles/Container.styled';

function Signup() {
  const { signup, error } = useSignup();

  const handleSubmit = async ({ email, password }) => {
    const username = '@' + email.split('@')[0];
    await signup({ email, username, password });
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
