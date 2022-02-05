import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './components/Home';
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

            <Route exact path="/home">
              <Home />
            </Route>

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


// falta hacer que no se pueda agregar 0 productos al carrito - tal vez poner el contador de 1 para arriba}
// hacer una logica para no poder pasar la cantidad total de stock de manera global y no solo por compra unica

// Poner el precio total del carrito
// Poner el numero de items agregados al carrito al lado de la imagen de la nav Y Desaparecer el carrito cuando tengo 0 items.

// Necesito hacer que cuando saquemos items del carrito modifique el precio, tnego que ver que paremetro tiene que seguir el useEffect para que se actualice.
