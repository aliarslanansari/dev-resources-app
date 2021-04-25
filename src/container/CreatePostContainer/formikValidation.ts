import { string, object } from 'yup'
export const validationSchema = object({
  title: string()
    .min(5, 'Title should be of atleast 5 Characters')
    .required('Title is required'),
  url: string().url().required('Resource URL is required'),
  description: string()
    .min(10, 'Description should be atleast 10 Characters')
    .required('Description is mandatory')
})
