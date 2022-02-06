import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import CartProvider from './components/context/CartProvider';

export default function App() {
  return (
    <>

      <CartProvider>

        <BrowserRouter>
          <NavBar />

          {/* adentro del swich va todo lo que esta routeado */}
          <Switch>

            <Route exact path="/cart">
              <Cart />
            </Route>

            {/* Los path exactos son los que van hardcodeados y no dependen de variables como los ID de los productos */}
            {/* Las rutas que van ligadas a paramentros no llevan la palabra exact */}
            <Route path="/items/:categoria">
              <ItemListContainer />
            </Route>

            <Route path="/itemsdDetail/:itemId">
              <ItemDetailContainer />
            </Route>

          </Switch>

          <Footer />
        </BrowserRouter>

      </CartProvider>

    </>
  );
}

// Corregir la logica de desaparecer el carrito aplicando bien sintactic Sugar.
// Preguntar como mejorar la parte del If de ItemListContainer para no hcer una doble declaración con un VAR
