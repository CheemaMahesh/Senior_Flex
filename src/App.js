import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Navbar from './Components/Pages/Navbar';
import Navbar from '../src/Componets/Pages/Navbar'
import Contact from '../src/Componets/Pages/Contact';
import Home from '../src/Componets/Pages/Home';
import Playlist from '../src/Componets/Pages/Playlist';
import Video from '../src/Componets/Pages/Videos';
import ContextApi from './ContextApi';
import ErrorPage from './Componets/Pages/ErrorPAge';
import Auth from './Componets/Pages/Auth';

function App() {
  return (
    <ContextApi>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<Playlist />} />
          <Route path="/:id" element={<Video />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path='/auth' element={<Auth/>}/>
          <Route path="*" element={<ErrorPage />} />

        </Routes>
      </BrowserRouter>
    </ContextApi>
  );
}

export default App;
