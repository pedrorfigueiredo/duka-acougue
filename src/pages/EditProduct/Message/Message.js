import React from "react";
import PropTypes from "prop-types";
import { Wrapper, Card, Text, Button } from "./styles";

const Message = ({ children, handleReturn }) => {
  return (
    <Wrapper>
      <Card>
        <Text>{children}</Text>
        <Button onClick={handleReturn}>Voltar</Button>
      </Card>
    </Wrapper>
  );
};

Message.propTypes = {
  children: PropTypes.node.isRequired,
  handleReturn: PropTypes.func.isRequired,
};

export default Message;
