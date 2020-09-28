import React, { useState, useEffect, useCallback } from "react";
import {useParams, useHistory} from 'react-router-dom';
import * as Yup from "yup";
import { useFormik } from "formik";
import EditProduct from "./EditProduct";

const EditProductContainer = () => {
  const [status, setStatus] = useState("LOADING");

  const params = useParams();
  const history = useHistory();

  const fetchItem = useCallback(async () => {
    setStatus("LOADING");
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/items/${params.id}`
      );
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const data = await response.json();
      formik.setFieldValue("name", data.name);
      formik.setFieldValue("category", data.category);
      formik.setFieldValue("description", data.description);
      formik.setFieldValue("price", data.price);
      formik.setFieldValue("unit", data.unit);
      formik.setFieldValue("options", data.options);
      setStatus("READY");
    } catch (err) {
      setStatus("ERROR");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.id]);

  useEffect(() => {
    fetchItem();
  }, [fetchItem]);

  const validationSchema = Yup.object().shape({
    name: Yup.string().max(50, "Nome muito grande").required("Obrigatório"),
    category: Yup.string().required("Obrigatório"),
    description: Yup.string().required("Obrigatório"),
    price: Yup.number()
      .typeError("Insira um número")
      .min(0.01, "Preço deve ser maior que R$ 0.00")
      .required("Obrigatório"),
    unit: Yup.string().required("Obrigatório"),
    image: Yup.mixed()
      .required("Obrigatório")
      .test("fileType", "Insira .jpg, .jpeg ou .png", (value) =>
        ["image/jpg", "image/jpeg", "image/png"].includes(value.type)
      ),
    options: Yup.array().of(Yup.string().required("Obrigatório")),
  });

  const handleSubmit = async (values) => {
    setStatus('LOADING');
    const formData = new FormData();
    formData.append("id", params.id);
    formData.append("name", formik.values.name);
    formData.append("category", formik.values.category);
    formData.append("description", formik.values.description);
    formData.append("price", formik.values.price);
    formData.append("unit", formik.values.unit);
    formData.append("image", formik.values.image);
    formData.append("options", JSON.stringify(formik.values.options));
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/items/${params.id}`, {
        method: "PATCH",
        body: formData,
      });
      if (!response.ok) {
        throw Error(response.statusText);
      }
      setStatus('SUCCESS');
    } catch (err) {
      setStatus('ERROR');
    }
    formik.resetForm();
  };

  const handleImageChange = (event) => {
    formik.setFieldValue("image", event.currentTarget.files[0]);
  };

  const handleAddOption = () => {
    const newOptions = [...formik.values.options, ""];
    formik.setFieldValue("options", newOptions);
  };

  const handleDeleteOption = () => {
    const newOptions = formik.values.options.slice(
      0,
      formik.values.options.length - 1
    );
    formik.setFieldValue("options", newOptions);
  };

  const handleReturn = () => {
    history.goBack();
  }

  const formik = useFormik({
    initialValues: {
      name: "",
      category: "",
      description: "",
      price: "",
      unit: "",
      image: {
        name: "",
        lastModified: "",
        lastModifiedDate: "",
        size: "",
        type: "",
        webkitRelativePath: "",
      },
      options: [],
    },
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <EditProduct
      values={formik.values}
      errors={formik.errors}
      touched={formik.touched}
      handleChange={formik.handleChange}
      handleImageChange={handleImageChange}
      handleAddOption={handleAddOption}
      handleDeleteOption={handleDeleteOption}
      handleReturn={handleReturn}
      handleBlur={formik.handleBlur}
      handleSubmit={formik.handleSubmit}
      status={status}
    />
  );
};

export default EditProductContainer;
