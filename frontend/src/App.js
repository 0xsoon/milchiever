import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './login';
import Layout from './components/Layout';
import Home from './pages/Home';

import "./styles/tailwind.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
