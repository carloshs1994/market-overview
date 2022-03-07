import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Details from './components/Details';
import VoiceSearch from './components/VoiceSearch';
import Settings from './components/Settings';
import './styles/main.scss';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/details/:symbol" element={<Details />} />
        <Route path="/VoiceSearch" element={<VoiceSearch />} />
        <Route path="/Settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
