import React, { useState, useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './routes/About';
import Home from './routes/Home';
import Works from './routes/works/Works';
import Platon from './routes/works/team/Platon';
import Sedal from './routes/works/team/Sedal';
import Solane from './routes/works/team/Solane';
import ThemeContext from './components/ThemeContext';
import BtnToggle from './components/BtnToggle';

function App() {

  const [currentTheme, setCurrentTheme] = useState(localStorage.selectTheme || 'light');

  useEffect(() => {localStorage.setItem('selectTheme', currentTheme)}, [currentTheme]);

  return (
    <ThemeContext.Provider value={{currentTheme, toggleTheme: () => {currentTheme === "light" ? setCurrentTheme("dark") : setCurrentTheme("light")}}}>
      <div className={currentTheme === "light" ? "app light" : "app dark"}>
          <Navbar /> 
          <BtnToggle />
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
    </ThemeContext.Provider>
  );
}

export default App;