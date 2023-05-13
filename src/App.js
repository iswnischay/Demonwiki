//import logo from './logo.svg';
import {  Route, Routes,   } from 'react-router-dom';
import './App.css';
import DisplayHashiras from './pages/DisplayHashiras';
import Home from './pages/Home';
import Hasiras from './pages/Hasiras';
import Demons from './pages/Demons';
import DisplayDemons from './pages/DisplayDemons ';

function App() {
  return (
    
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/DisplayHashiras/:demonid' element={<DisplayHashiras />} />
      <Route path='/DisplayDemon/:demonid' element={<DisplayDemons />} />
      <Route path='/Hashiras' element={<Hasiras />} />
      <Route path='/Demons' element={<Demons />} />
    </Routes>
    <div className="App">
      
      </div>
    </>
  );
}

export default App;
