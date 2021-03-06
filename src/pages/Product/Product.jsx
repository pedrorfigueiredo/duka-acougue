import React from 'react';
import { BsArrowReturnLeft } from 'react-icons/bs';
import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';
import Loader from '../../components/Loader';
import Counter from './Counter';
import { Error } from '../../components/styles';

import {
  Wrapper,
  Card,
  IconHandler,
  Header,
  Image,
  Main,
  Title,
  Description,
  Form,
  SubTitle,
  TextArea,
  OptionsList,
  Option,
  InputError,
  Button,
  TotalPrice,
  DeleteButton,
  ReturnButton,
} from './styles';

const Product = ({
  item,
  status,
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  quantity,
  handleQuantity,
  totalPrice,
  handleDelete,
  handleReturn,
}) => {
  return (
    <Wrapper>
      {
        {
          LOADING: <Loader />,
          ERROR: <Error>Algo deu errado. Tente novamente.</Error>,
          SUCCESS: item && (
            <Card>
              <Header>
                <ReturnButton onClick={handleReturn}>
                  <BsArrowReturnLeft />
                </ReturnButton>
                <IconHandler to={`/produto/${item._id}/editar`}>
                  <RiEdit2Line />
                </IconHandler>
                <DeleteButton onClick={handleDelete}>
                  <RiDeleteBinLine />
                </DeleteButton>
              </Header>
              <Main>
                <Image src={item.image.url} />
                <Title>{item.name}</Title>
                <Description>{item.description}</Description>
              </Main>
              <Form>
                {item.options.length > 0 && (
                  <>
                    <SubTitle>Modo de Preparo</SubTitle>
                    <OptionsList>
                      {item.options.map((option) => (
                        <Option key={Math.random()} htmlFor={option}>
                          {option}
                          <input
                            id={option}
                            type="radio"
                            name="option"
                            value={option}
                            checked={values.option === option}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                        </Option>
                      ))}
                      {errors.option && touched.option && (
                        <InputError>{errors.option}</InputError>
                      )}
                    </OptionsList>
                  </>
                )}
                <SubTitle>Quantidade ({item.unit})</SubTitle>
                <Counter quantity={quantity} handleQuantity={handleQuantity} />
                <SubTitle>Observação</SubTitle>
                <TextArea
                  placeholder="Alguma observação adicional?"
                  name="obs"
                  value={values.obs}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.obs && touched.obs && (
                  <InputError>{errors.obs}</InputError>
                )}
                <Button onClick={handleSubmit} type="submit">
                  <TotalPrice>
                    R$
                    {totalPrice.toFixed(2)}
                  </TotalPrice>
                  Adicionar
                </Button>
              </Form>
            </Card>
          ),
        }[status]
      }
    </Wrapper>
  );
};

export default Product;
