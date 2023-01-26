import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";

const formValidationSchema = yup.object({
  email: yup.string().min(5, "Need a longer email"),
  password: yup.string().min(8, "Need a longer password🥳"),
});

function BasicForm() {
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: formValidationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        id="email"
        name="email"
        onChange={formik.handleChange}
        value={formik.values.email}
        type="email"
        placeholder="Enter email"
      />
      {formik.errors.email}
      <input
        id="password"
        name="password"
        onChange={formik.handleChange}
        value={formik.values.password}
        type="password"
        placeholder="Enter password"
      />
      {formik.errors.password}
      <button type="submit">Submit</button>
    </form>
  );
}

export default BasicForm;
