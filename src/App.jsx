import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './Components/Home/Home.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Songs from './Components/Home/Songs/Songs.jsx';
import { useState } from 'react';


function App() {
  const [songName,setSongName] = useState('')
  const routeChange = (element) =>{ 
      setSongName(element)
  }

  return (
    <BrowserRouter>
      <Navbar />
      <Footer />
      <Routes>
        <Route exact path="/" element={<Home routeChange={routeChange} />} />
        <Route exact path="/songs" element={<Songs name={songName} />}  />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
