import './App.css';
import Card from './components/Card';
import { NavBar } from './components/NavBar';

function App() {
  const title='CALCULADORA DE EDAD'
  return (
    <div className="App">
      <NavBar title={title}/>
      <Card />
    </div>
  );
}

export default App;
