import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

function App() {
  return (
    <>
    <NavBar />
    <ItemListContainer greeting={"le paso un saludo a mi funcion"} />
    </>
  );
}

export default App;
