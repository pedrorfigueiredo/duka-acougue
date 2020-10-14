import React, { useState, useEffect, useCallback } from 'react';
import Main from './Main';

const MainContainer = () => {
  const [items, setItems] = useState([]);
  const [status, setStatus] = useState('READY');

  const fetchItems = useCallback(async () => {
    setStatus('LOADING');
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/items`
      );
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const data = await response.json();
      setItems(data);
      setStatus('SUCCESS');
    } catch (err) {
      setStatus('FAIL');
    }
  }, []);

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  return <Main status={status} items={items} />;
};

export default MainContainer;
