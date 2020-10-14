import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import Theme from './components/Theme';
import { Layout } from './components/styles';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Main from './pages/Main';
import Category from './pages/Category';
import About from './pages/About';
import AddProduct from './pages/AddProduct';
import EditProduct from './pages/EditProduct';
import Product from './pages/Product';
import ShopCart from './pages/ShopCart';

const App = () => {
  const [sidebar, setSidebar] = useState(false);
  const handleOpenSidebar = () => {
    setSidebar(true);
  };
  const handleCloseSidebar = () => {
    setSidebar(false);
  };

  return (
    <Theme>
      <Router>
        <Layout>
          <Header handleOpenSidebar={handleOpenSidebar} />
          <Navbar />
          {sidebar && <Sidebar handleCloseSidebar={handleCloseSidebar} />}
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/categoria/:id" component={Category} />
            <Route path="/sobre" component={About} />
            <Route path="/produto/:id" exact component={Product} />
            <Route path="/produto/:id/editar" component={EditProduct} />
            <Route path="/carrinho" component={ShopCart} />
            <Route path="/sobre" component={Main} />
            <Route path="/adicionar" component={AddProduct} />
            <Route path="/login" component={Main} />
            <Redirect to="/" />
          </Switch>
        </Layout>
      </Router>
    </Theme>
  );
};

export default App;
