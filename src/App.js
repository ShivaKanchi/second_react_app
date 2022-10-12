import Classcomponent from './components/Classcomponent';
import './App.css';
import Functioncomponent from './components/Functioncomponenet';
import { useState } from 'react';

function App() {
  const [name, setName] = useState("Shiva");
  return (
    <div className="App">
      <header className="App-header">
        <h1>Class Component</h1>
        <Classcomponent />
        <br />
        <h1>Functional Component</h1>
        <Functioncomponent name={name} setName={setName} />
      </header>
    </div>
  );
}

export default App;
