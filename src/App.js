import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ComponenteBasico from './components/ComponenteBasico'

function App() {
  return (
    <>
    <NavBar />
    <ItemListContainer greeting={"le paso un saludo a mi funcion"} />
    <ComponenteBasico />
    </>
  );
}

export default App;
