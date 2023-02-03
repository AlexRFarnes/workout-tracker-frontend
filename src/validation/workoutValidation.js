import * as Yup from 'yup';

const WorkoutSchema = Yup.object().shape({
  title: Yup.string()
    .min(3, 'Title is too Short!')
    .max(50, 'Title is too Long!')
    .required('Title is required'),
  loadUnits: Yup.string()
    .oneOf(['kg', 'lbs'], 'Please select between kg and lbs')
    .required('Load units are required'),
  load: Yup.number()
    .min(0, 'Minimum for load is 0')
    .required('Load is required'),
  series: Yup.number()
    .min(1, 'Minimum for series is 1')
    .required('Series are required'),
  reps: Yup.number()
    .min(1, 'Minimum for reps is 1')
    .required('Resp are required'),
});

export default WorkoutSchema;
