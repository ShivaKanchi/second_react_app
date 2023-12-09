import Classcomponent from './pages/Classcomponent';
import Functioncomponent from './pages/Functioncomponenet';
import { useState } from 'react';
import { Routes, Route } from "react-router-dom";


function App() {
  const [name, setName] = useState("Shiva");
  return (
    <Routes>
      <Route path="/" element={<h1>Helo</h1>} />
      <Route path="/class" element={<Classcomponent />} />
      <Route path="/function" element={<Functioncomponent name={name} setName={setName} />} />
    </Routes>
  );
}

export default App;
