import * as yup from 'yup';

export const rentalRequestValidationSchema = yup.object().shape({
  status: yup.string().required(),
  tool_id: yup.string().nullable(),
  customer_id: yup.string().nullable(),
});