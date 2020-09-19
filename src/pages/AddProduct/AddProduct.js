import React from "react";
import PropTypes from "prop-types";
import {
  Wrapper,
  Header,
  Form,
  InputGroup,
  Label,
  Input,
  TextArea,
  Error,
  Button
} from "./styles";

const AddProduct = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting,
}) => {
  return (
    <Wrapper>
      <Header>Adicionar produto à loja</Header>
      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <Label htmlFor="name">Nome</Label>
          <Input
            id="name"
            type="text"
            onChange={handleChange}
            onBlue={handleBlur}
            value={values.name}
          />
          <Error>{touched.name && errors.name}</Error>
        </InputGroup>
        <InputGroup>
        <Label htmlFor="category">Categoria</Label>
          <Input
            id="category"
            type="text"
            onChange={handleChange}
            onBlue={handleBlur}
            value={values.category}
          />
          <Error>{touched.category && errors.category}</Error>
        </InputGroup>
        <InputGroup>
        <Label htmlFor="description">Descrição</Label>
          <TextArea
            id="description"
            type="text"
            onChange={handleChange}
            onBlue={handleBlur}
            value={values.description}
          />
          <Error>{touched.description && errors.description}</Error>
        </InputGroup>
        <InputGroup>
        <Label htmlFor="price">Preço</Label>
          <Input
            id="price"
            type="text"
            onChange={handleChange}
            onBlue={handleBlur}
            value={values.price}
          />
          <Error>{touched.price && errors.price}</Error>
        </InputGroup>
        <InputGroup>
        <Label htmlFor="image">Imagem</Label>
          <Input
            id="image"
            type="text"
            onChange={handleChange}
            onBlue={handleBlur}
            value={values.image}
          />
          <Error>{touched.image && errors.image}</Error>
        </InputGroup>
        <Button type="submit" disabled={isSubmitting} onClick={handleSubmit}>Cadastrar</Button>
      </Form>
    </Wrapper>
  );
};

AddProduct.propTypes = {
  values: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
};

export default AddProduct;
