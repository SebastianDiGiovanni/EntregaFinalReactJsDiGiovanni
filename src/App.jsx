import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Cart from './components/Cart/Cart';
import ItemListContainer from './components/Main/ItemListContainer';
import ItemDetailContainer from './components/Main/ItemDetailContainer';
import { CartProvider } from './context/CartContext';
import CartForm from './components/Cart/CartForm';
import Footer from './components/Footer';


function App() { 
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <Header />
          <Routes>
            <Route 
              path="/" 
              element={<ItemListContainer greeting="Bienvenido a Anime Store DiGio" />} 
            />
          
            <Route 
              path="/categorias/:name" 
              element={<ItemListContainer greeting="Bienvenido a Anime Store DiGio" />} 
            />
          
            <Route 
              path="/item/:id" 
              element={<ItemDetailContainer />} 
            />
          
            <Route 
              path="/cart" 
              element={<Cart />} 
            />

            <Route 
              path="/checkout" 
              element={<CartForm />} 
            />
          </Routes>
        
        </CartProvider>
        <Footer/>
      </BrowserRouter>
    </>
  );
}




export default App;
