import * as Yup from 'yup';

export const ContactFormSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email address format').required('Email is required'),
  subject: Yup.string().required('Subject is required'),
  message: Yup.string().required('Message is required'),
  contactNo: Yup.string().required('Contact No is required'),
});
