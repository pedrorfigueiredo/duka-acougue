import React from 'react';
import Loader from '../../components/Loader';
import Message from './Message';
import {
  Wrapper,
  Header,
  Form,
  InputGroup,
  Label,
  Input,
  TextArea,
  Error,
  Button,
  Select,
  Row,
  FileMessage,
  UploadButton,
  OptionInput,
  OptionButton,
  OptionGroup,
} from './styles';

const AddProduct = ({
  values,
  errors,
  touched,
  handleChange,
  handleImageChange,
  handleAddOption,
  handleDeleteOption,
  handleReturn,
  handleBlur,
  handleSubmit,
  status,
}) => {
  return (
    <Wrapper>
      <Header>Adicionar produto à loja</Header>
      {
        {
          READY: (
            <Form onSubmit={handleSubmit}>
              <InputGroup>
                <Label htmlFor="name">Nome</Label>
                <Input
                  name="name"
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
                <Error>{touched.name && errors.name}</Error>
              </InputGroup>
              <InputGroup>
                <Label htmlFor="category">Categoria</Label>
                <Select
                  name="category"
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.category}
                >
                  <option value="">Escolha uma categoria</option>
                  <option value="bovinos">Bovinos</option>
                  <option value="suinos">Suínos</option>
                  <option value="aves">Aves</option>
                  <option value="bebidas">Bebidas</option>
                  <option value="acessorios">Acessórios para Churrasco</option>
                </Select>
                <Error>{touched.category && errors.category}</Error>
              </InputGroup>
              <InputGroup>
                <Label htmlFor="description">Descrição</Label>
                <TextArea
                  name="description"
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.description}
                />
                <Error>{touched.description && errors.description}</Error>
              </InputGroup>
              <InputGroup>
                <Label htmlFor="price">Preço (R$)</Label>
                <Input
                  name="price"
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.price}
                />
                <Error>{touched.price && errors.price}</Error>
              </InputGroup>
              <InputGroup>
                <Label htmlFor="unit">Unidade</Label>
                <Select
                  name="unit"
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.unit}
                >
                  <option value="">Escolha uma unidade</option>
                  <option value="kg">Kilograma (kg)</option>
                  <option value="un">Unidade (un)</option>
                </Select>
                <Error>{touched.unit && errors.unit}</Error>
              </InputGroup>
              <InputGroup>
                <Label>Imagem</Label>
                <Row>
                  {values.image.name ? (
                    <FileMessage>{values.image.name}</FileMessage>
                  ) : (
                    <FileMessage>selecione uma imagem...</FileMessage>
                  )}
                  <UploadButton htmlFor="image">Upload</UploadButton>
                  <Input
                    id="image"
                    name="image"
                    type="file"
                    onChange={handleImageChange}
                    onBlur={handleBlur}
                    style={{ display: 'none' }}
                  />
                </Row>
                <Error>{touched.image && errors.image}</Error>
              </InputGroup>
              <InputGroup>
                <Label>Opções de Preparo (opcional)</Label>
                {values.options.length > 0 &&
                  values.options.map((option, index) => (
                    <OptionGroup key={Math.random()}>
                      <OptionInput
                        name={`options.${index}`}
                        type="text"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.options[index]}
                      />
                      <Error>
                        {errors.options &&
                          touched.options &&
                          touched.options[index] &&
                          errors.options[index]}
                      </Error>
                    </OptionGroup>
                  ))}
                <Row>
                  <OptionButton onClick={handleDeleteOption}>
                    Remover
                  </OptionButton>
                  <OptionButton onClick={handleAddOption}>
                    Adicionar
                  </OptionButton>
                </Row>
              </InputGroup>
              <Button type="submit" onClick={handleSubmit}>
                Cadastrar
              </Button>
            </Form>
          ),
          LOADING: <Loader />,
          SUCCESS: (
            <Message handleReturn={handleReturn}>
              Item adicionado com sucesso!
            </Message>
          ),
          ERROR: (
            <Message handleReturn={handleReturn}>
              Algo deu errado. Tente novamente.
            </Message>
          ),
        }[status]
      }
    </Wrapper>
  );
};

export default AddProduct;
