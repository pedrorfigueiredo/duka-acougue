import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Header, Title } from './styles';
import { Error } from '../../components/styles';
import Loader from '../../components/Loader';
import ItemGrid from '../../components/ItemGrid';

const Category = ({ status, items, title }) => {
  return (
    <Wrapper>
      <Header>
        <Title>{title.charAt(0).toUpperCase() + title.slice(1)}</Title>
      </Header>
      {
        {
          LOADING: <Loader />,
          SUCCESS: <ItemGrid items={items} />,
          FAIL: <Error>Algo deu errado. Tente novamente.</Error>,
          EMPTY: <Error>Sem produtos para esta categoria por enquanto.</Error>,
        }[status]
      }
    </Wrapper>
  );
};

Category.propTypes = {
  status: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
};

export default Category;
