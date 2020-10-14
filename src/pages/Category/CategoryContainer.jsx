import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import Category from './Category';

const CategoryContainer = () => {
  const [items, setItems] = useState([]);
  const [status, setStatus] = useState('READY');
  const params = useParams();

  const fetchItems = useCallback(async () => {
    setStatus('LOADING');
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/items/category/${params.id}`
      );
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const data = await response.json();
      if (!(data.length > 0)) {
        setStatus('EMPTY');
        return;
      }
      setItems(data);
      setStatus('SUCCESS');
    } catch (err) {
      setStatus('FAIL');
    }
  }, [params.id]);

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  return <Category status={status} items={items} title={params.id} />;
};

export default CategoryContainer;
