import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import AddProduct from "./AddProduct";

const AddProductContainer = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().max(50, "Muito grande").required("Obrigatório"),
    category: Yup.string().required("Obrigatório"),
    description: Yup.string().required("Obrigatório"),
    price: Yup.number()
      .min(0.01, "Deve ser maior que 0")
      .required("Obrigatório"),
    unity: Yup.string().required("Obrigatório"),
    image: Yup.object().required("Obrigatório"),
  });

  const submitHandler = (values, { setSubmitting }) => {
    alert(JSON.stringify(values, null, 2));
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      category: "",
      description: "",
      price: "",
      unity: "",
      image: {},
      options: [],
    },
    validationSchema,
    onSubmit: submitHandler,
  });

  return (
    <AddProduct
      values={formik.values}
      errors={formik.errors}
      touched={formik.touched}
      handleChange={formik.handleChange}
      handleBlur={formik.handleBlur}
      handleSubmit={formik.handleSubmit}
      isSubmitting={formik.isSubmiting}
    />
  );
};

export default AddProductContainer;
