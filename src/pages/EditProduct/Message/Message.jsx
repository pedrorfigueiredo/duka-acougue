import React from 'react';
import { Wrapper, Card, Text, Button } from './styles';

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

export default Message;
