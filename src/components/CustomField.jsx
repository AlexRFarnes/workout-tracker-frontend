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
    border: 2px solid var(--error);
  }

  label {
    font-size: 0.9rem;
  }

  span {
    color: var(--error);
  }
`;

const CustomField = ({ label, emptyFields, required, ...props }) => {
  const [field, meta] = useField(props.name);

  return (
    <Wrapper>
      <label>
        {label}
        <span>{field.name !== 'load' ? '*' : null}</span>
        <input
          {...field}
          {...props}
          required={required ? true : false}
          className={
            (meta.touched && meta.error) || emptyFields.includes(field.name)
              ? 'error'
              : ''
          }
        />
      </label>
      {meta.error && meta.touched && <Error>{meta.error}</Error>}
    </Wrapper>
  );
};

export default CustomField;
