import { useField } from 'formik';
import styled from 'styled-components';
import { Error } from '../styles/Error';

const Wrapper = styled.div`
  input {
    padding: 10px;
    margin-top: 10px;
    margin-bottom: 20px;
    width: 100%;
    border: 1px solid #ddd;
    border-radius: 4px;
  }

  input.error {
    border: 1px solid var(--error);
  }

  label {
    font-size: 0.9rem;
  }
`;

const CustomField = ({ label, required, ...props }) => {
  const [field, meta] = useField(props.name);

  return (
    <Wrapper>
      <label>
        {label}
        <input
          {...field}
          {...props}
          required={`${required} ? true : false`}
          className={meta.touched && meta.error ? 'error' : ''}
        />
      </label>
      {meta.error && meta.touched && <Error>{meta.error}</Error>}
    </Wrapper>
  );
};

export default CustomField;
