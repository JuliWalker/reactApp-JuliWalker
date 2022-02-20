import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import CartProvider from './components/context/CartProvider';
import TerminarCompra from './components/TerminarCompra';

export default function App() {
  return (
    <>

      <CartProvider>

        <BrowserRouter>
          <NavBar />

          <Switch>

            <Route exact path="/cart">
              <Cart />
            </Route>


            <Route path="/items/:categoria">
              <ItemListContainer />
            </Route>

            <Route path="/itemsdDetail/:itemId">
              <ItemDetailContainer />
            </Route>

            <Route exact path="/TerminarCompra">
              <TerminarCompra />
            </Route>

          </Switch>

          <Footer />
        </BrowserRouter>

      </CartProvider>

    </>
  );
}

// hacer como dijo Guille de tener componentes de logica y otros de render, no delar componentes mixtos.
// Configurar bien el git ignore
// actualizar el README - Escribir todos los install que llevan el proyecto (node, firebase, boostrap, reactrooter, todo con su versión instalada).
// encarpetar los JSX de modo que sean prolijos.
// cambiar el Item Detail para que quede con texto y boton al costaod. Usar un grid responsive.