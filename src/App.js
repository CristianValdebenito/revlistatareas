import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import RevLista from './Components/RevLista';

function App() {
  const [tareas,setTareas]=useState([]);
  return (
    <div className="App">
     <RevLista tareas={tareas} setTareas={setTareas}></RevLista>
    </div>
  );
}

export default App;