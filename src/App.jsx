import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './routes/About';
import Home from './routes/Home';
import Works from './routes/works/Works';
import Platon from './routes/works/team/Platon';
import Sedal from './routes/works/team/Sedal';
import Solane from './routes/works/team/Solane';

function App() {


  return (
    <div className="app">
        <Navbar /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Works />}>
            <Route path="/works/platon" element={<Platon />} />
            <Route path="/works/sedal" element={<Sedal />} />
            <Route path="/works/solane" element={<Solane />} />
          </Route>
        </Routes>
    </div>
  );
}

export default App;