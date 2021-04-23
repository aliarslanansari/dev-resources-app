import { string, object, ref } from 'yup'
export const validationSchema = object({
  username: string().email().required('Email is required'),
  password: string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\^$*.[\]{}()?\-“!@#%&/,><’:;|_~`])\S{8,99}$/,
      'Please use a valid password'
    )
    .required('Password is required'),
  confirmPassword: string()
    .when('password', {
      is: (val: string) => (val && val.length > 0 ? true : false),
      then: string().oneOf(
        [ref('password')],
        'Both password need to be the same'
      )
    })
    .required('Confirm Password is required'),
  name: string().required('Name is required')
})

export const verificationCodeValidationSchema = object({
  verificationCode: string()
})
