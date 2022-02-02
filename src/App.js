import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, useParams } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './components/Home';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';

export default function App() {
  return (
    <>
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
    </>
  );
}
