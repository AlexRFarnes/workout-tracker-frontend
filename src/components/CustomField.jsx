import { useField } from 'formik';
import styled from 'styled-components';
import { Error } from '../styles/Error';

const Wrapper = styled.div`
  input {
    padding: 10px;
    margin-top: 10px;
    margin-bottom: 20px;
    width: 100%;
    border: 1px solid var(--medium-gray-color);
    border-radius: 4px;
  }

  input.error {
    border: 2px solid var(--error);
  }

  label {
    font-size: 0.9rem;
  }

  .optional-field {
    font-size: 0.7rem;
    color: var(--dark-gray-color);
  }
`;

const CustomField = ({ label, emptyFields, required, ...props }) => {
  const [field, meta] = useField(props.name);

  return (
    <Wrapper>
      <label>
        {label}{' '}
        <span className='optional-field'>{!required ? '- optional' : ''} </span>
        <span className='required-field'>{}</span>
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
