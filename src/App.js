import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Theme from "./components/Theme";
import { Layout } from "./components/styles";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Main from "./pages/Main";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";
import Product from "./pages/Product";
import ShopCart from "./pages/ShopCart";

const App = () => {
  return (
    <Theme>
      <Router>
        <Layout>
          <Header />
          <Navbar />
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/categoria/bovinos" component={Main} />
            <Route path="/categoria/suinos" component={Main} />
            <Route path="/categoria/aves" component={Main} />
            <Route path="/categoria/bebidas" component={Main} />
            <Route path="/categoria/acessorios" component={Main} />
            <Route path="/produto/:id" exact component={Product} />
            <Route path="/produto/:id/editar" component={EditProduct} />
            <Route path="/carrinho" component={ShopCart} />
            <Route path="/sobre" component={Main} />
            <Route path="/adicionar" component={AddProduct} />
            <Route path="/login" component={Main} />
            <Route path="/carrinho" component={Main} />
            <Redirect to="/" />
          </Switch>
        </Layout>
      </Router>
    </Theme>
  );
};

export default App;
