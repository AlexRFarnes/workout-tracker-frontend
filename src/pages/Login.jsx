import AuthenticateForm from '../components/AuthenticateForm';
import { useLogin } from '../hooks/useLogin';
import { FormContainer } from '../styles/Container.styled';

function Login() {
  const { login, error } = useLogin();

  const handleSubmit = async values => {
    await login(values);
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
