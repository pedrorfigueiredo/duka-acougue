import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Header, Title, Subtitle } from './styles';
import { Error } from '../../components/styles';
import Loader from '../../components/Loader';
import ItemGrid from '../../components/ItemGrid';

const Main = ({ status, items }) => {
  return (
    <Wrapper>
      <Header>
        <Title>A sua Casa de Carnes</Title>
        <Subtitle>
          Onde você encontra produtos para o seu dia a dia e para o seu
          churrasco
        </Subtitle>
      </Header>
      {
        {
          LOADING: <Loader />,
          SUCCESS: <ItemGrid items={items} />,
          FAIL: <Error>Algo deu errado. Tente novamente.</Error>,
        }[status]
      }
    </Wrapper>
  );
};

Main.propTypes = {
  status: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
};

export default Main;
