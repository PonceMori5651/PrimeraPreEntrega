import './App.css';
import Navbar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  const styleTitulo={
    textAlign:"center",
    margin: "40px",
    fontFamily:"Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif"
  }
  return (
    <>
      <div className='App-header'>
        <Navbar/>
      </div>
      <h1 style={styleTitulo}>Productos Mas Vendidos de la Semana</h1>
      <div className='Container'>
        <ItemListContainer/>
      </div>
    </>
  );
}

export default App;
