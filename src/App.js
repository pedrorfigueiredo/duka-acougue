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

const App = () => {
  return (
    <Theme>
      <Router>
        <Layout>
          <Header />
          <Navbar />
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/categoria/bovinos" exact component={Main} />
            <Route path="/categoria/suinos" exact component={Main} />
            <Route path="/categoria/aves" exact component={Main} />
            <Route path="/categoria/bebidas" exact component={Main} />
            <Route path="/categoria/acessorios" exact component={Main} />
            <Route path="/sobre" exact component={Main} />
            <Route path="/adicionar" exact component={AddProduct} />
            <Route path="/login" exact component={Main} />
            <Route path="/carrinho" exact component={Main} />
            <Redirect to="/" />
          </Switch>
        </Layout>
      </Router>
    </Theme>
  );
};

export default App;
