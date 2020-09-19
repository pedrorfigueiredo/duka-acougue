import React from "react";
import PropTypes from "prop-types";

import { Wrapper, Header, Title, Subtitle, Error } from "./styles";
import Loader from "../../components/Loader";
import ItemGrid from "../../components/ItemGrid";

const Main = ({ status, items }) => {
  return (
    <Wrapper>
      <Header>
        <Title>A sua Casa de Carnes</Title>
        <Subtitle>Onde você encontra produtos para o seu dia a dia e para o seu churrasco</Subtitle>
      </Header>
      {
        {
          LOADING: <Loader />,
          SUCCESS: <ItemGrid items={items} />,
          FAIL: <Error>Erro no servidor. Tente novamente.</Error>,
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
