import { string, object } from 'yup'
export const validationSchema = object({
  username: string().email().required('Email is required'),
  password: string().required('Password is required')
})
