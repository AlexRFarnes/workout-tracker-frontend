import * as Yup from 'yup';
import YupPassword from 'yup-password';
YupPassword(Yup); // extend yup

const UserSchema = Yup.object().shape({
  email: Yup.string().email().required('Email is required'),
  password: Yup.string()
    .password()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .minUppercase(1, 'Password must contain at least 1 uppercase letter')
    .minLowercase(1, 'Password must contain at least 1 lowercase letter')
    .minNumbers(1, 'Password must contain at least 1 number')
    .minSymbols(1, 'Password must contain at least 1 symbol'),
});

export default UserSchema;
