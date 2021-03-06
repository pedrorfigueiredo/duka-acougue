import React, { useState, useEffect, useCallback } from 'react';
import { v1 as uuid } from 'uuid';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useParams, useHistory } from 'react-router-dom';
import { addOrder } from '../../store/ducks/shopCart';

import Product from './Product';

const ProductContainer = () => {
  const [item, setItem] = useState(null);
  const [status, setStatus] = useState('READY');
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const params = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    option: Yup.string().required('Obrigatório'),
    obs: Yup.string().max(300, 'Uso máximo de 300 caracteres'),
  });

  const handleSubmit = (values) => {
    const order = {
      id: uuid(),
      name: item.name,
      image: item.image.url,
      unit: item.unit,
      option: values.option,
      obs: values.obs,
      quantity,
      totalPrice,
    };
    dispatch(addOrder(order));
    history.goBack();
  };

  const formik = useFormik({
    initialValues: {
      option: '',
      obs: '',
    },
    validationSchema,
    onSubmit: handleSubmit,
  });

  const fetchItem = useCallback(async () => {
    setStatus('LOADING');
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/items/${params.id}`
      );
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const data = await response.json();
      setItem(data);
      setStatus('SUCCESS');
    } catch (err) {
      setStatus('ERROR');
    }
  }, [params.id]);

  useEffect(() => {
    fetchItem();
  }, [fetchItem]);

  useEffect(() => {
    item && setTotalPrice(item.price);
  }, [item]);

  useEffect(() => {
    item && setTotalPrice(quantity * item.price);
  }, [quantity, item]);

  const handleQuantity = (action) => {
    let stepSize;
    if (item.unit === 'un') {
      stepSize = 1;
    } else {
      stepSize = 0.5;
    }
    switch (action) {
      case 'add':
        setQuantity((prevQuantity) => {
          return prevQuantity + stepSize;
        });
        break;
      case 'subtract':
        setQuantity((prevQuantity) => {
          if (prevQuantity <= 1) {
            return prevQuantity;
          }
          return prevQuantity - stepSize;
        });
        break;
      default:
    }
  };

  const handleDelete = async () => {
    try {
      setStatus('LOADING');
      await fetch(`${process.env.REACT_APP_BACKEND_URL}/items/${params.id}`, {
        method: 'DELETE',
      });
      history.goBack();
    } catch (err) {
      history.goBack();
    }
  };

  const handleReturn = () => {
    history.goBack();
  };

  return (
    <Product
      item={item}
      status={status}
      values={formik.values}
      errors={formik.errors}
      touched={formik.touched}
      handleChange={formik.handleChange}
      handleBlur={formik.handleBlur}
      handleSubmit={formik.handleSubmit}
      quantity={quantity}
      handleQuantity={handleQuantity}
      totalPrice={totalPrice}
      handleDelete={handleDelete}
      handleReturn={handleReturn}
    />
  );
};

export default ProductContainer;
