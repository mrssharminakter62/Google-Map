import logo from './logo.svg';
import './App.css';
import Direction from './component/Map/Direction';
import { useState } from 'react';

function App() {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  return (
    <div className="App">
      <input type="text" placeholder="Starting From" onBlur={e=>setOrigin(e.target.value)}/>
      <input type="text" placeholder="Going From" onBlur={e=>setDestination(e.target.value)}/>
   <Direction></Direction>
      {/* <Map></Map> */}
    </div>
  );
}

export default App;
