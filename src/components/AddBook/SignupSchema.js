import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, 'Too Short!')
    .max(100, 'Too Long!')
    .required('Required'),
  author: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  pages: Yup.number()
    .integer()
    .min(1, 'Not enough pages')
    .max(999, '999 pages maximum!')
    .required('Required'),
  rating: Yup.number()
    .integer()
    .min(1, 'Rate the book on a scale 1-5')
    .max(5, 'Rate the book on a scale 1-5')
    .required('Required'),
});

export default SignupSchema;