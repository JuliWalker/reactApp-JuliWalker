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

// Limpiar el codigo de la rama main, que no quede nada que no se use en la rama productiva
// Configurar bien el git ignore
// actualizar el README - Escribir todos los install que llevan el proyecto (node, firebase, boostrap, reactrooter, todo con su versión instalada)
// Revisar que onda Versel para subir el proyecto a productivo.
// limpiar todas las cosas que vienen por defecto en el react app y no sirven.
// Terminar el proyecto con la funcionalidad de compra, guardando los datos de la compra (sin pago) y que te mande a una pagina de "gracias por su compra" y un boton para volver a comrpar.
// Falta que renderice bien en mobile, queda alineado a la izquierda.
// hacer que el formulario sea responsivo para celular, ahora sigue en 2 columnas
// encarpetar los JSX de modo que sean prolijos.