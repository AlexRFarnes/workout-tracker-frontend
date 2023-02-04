import { Form, Formik, Field } from 'formik';
import styled from 'styled-components';
import WorkoutSchema from '../validation/workoutValidation';
import { Error } from '../styles/Error';
import CustomField from './CustomField';
import { PrimaryButton, SecondaryButton } from '../styles/Button.styled';
import { useNavigate } from 'react-router-dom';

const StyledForm = styled(Form)`
  .radio-group {
    margin-bottom: 20px;
    width: 100%;

    label,
    .radio-group-label {
      font-size: 0.9rem;
    }

    .radio-group-label {
      margin-bottom: 10px;
    }

    label:first-of-type {
      margin-right: 20px;
    }
  }
`;

const BaseForm = ({
  initialValues,
  title,
  buttonText,
  handleSubmit,
  error,
  emptyFields,
  ...props
}) => {
  const navigate = useNavigate();

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={initialValues}
      validationSchema={WorkoutSchema}>
      {formik => (
        <StyledForm>
          <h3>{title}</h3>
          <CustomField
            placeholder='Exercise title'
            type='text'
            id='title'
            name='title'
            label='Title'
            required={true}
            emptyFields={emptyFields}
          />
          <div
            className='radio-group'
            role='group'
            aria-labelledby='load-units-radio-group'>
            <div className='radio-group-label'>Load Units:</div>
            <label>
              <Field type='radio' name='loadUnits' value='kg' />
              Kg
            </label>
            <label>
              <Field type='radio' name='loadUnits' value='lbs' />
              Lbs
            </label>
          </div>
          <CustomField
            label='Load'
            type='number'
            placeholder='Load'
            id='load'
            name='load'
            emptyFields={emptyFields}
          />

          <CustomField
            label='Series'
            type='number'
            id='series'
            name='series'
            placeholder='Series'
            required={true}
            emptyFields={emptyFields}
          />

          <CustomField
            label='Reps'
            type='number'
            id='reps'
            name='reps'
            placeholder='Reps'
            required={true}
            emptyFields={emptyFields}
          />
          {error && <Error>{error}</Error>}
          {props.backButton && (
            <SecondaryButton
              style={{ marginRight: '10px' }}
              onClick={() => {
                navigate(-1, { replace: true });
              }}>
              Back
            </SecondaryButton>
          )}
          <PrimaryButton
            disabled={formik.isSubmitting || !(formik.dirty && formik.isValid)}
            type='submit'>
            {buttonText}
          </PrimaryButton>
        </StyledForm>
      )}
    </Formik>
  );
};

export default BaseForm;
