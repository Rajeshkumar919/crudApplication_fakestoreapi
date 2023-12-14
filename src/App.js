// App.js
import React from 'react';
//import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ProductProvider } from './component/ProductContext';
import AddProduct from './component/AddProduct';
import ProductList from './component/ProductList';
import DeleteProduct from './component/DeleteProduct';
import UpdateProduct from './component/UpdateProduct';

import Header from './component/Header';
import Footer from './component/Footer';
import AxiosPost from './component/AxiosPost';
const App = () => {
  return (
    <ProductProvider>
      <>
      <Header/>
      <AxiosPost/>
      <ProductList/>
      
      <AddProduct/>
     
      <DeleteProduct/>
      <UpdateProduct/>
      <ProductList/>
      <Footer/>
     
      </>
    </ProductProvider>
  );
};

export default App;
