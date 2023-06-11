import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {CookiesProvider} from 'react-cookie';
import Layout from './components/Layout';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Goals from './pages/Goals';

import "./styles/tailwind.css";

function App() {
  return (
	  <CookiesProvider>
		<BrowserRouter>
		  <Routes>
			<Route path="/signin" element={<Signin />}/>
			<Route path="/signup" element={<Signup />}/>
			<Route path="/" element={<Layout />} >
			  <Route index path="home" element={<Home />} />
			  <Route path="goals" element={<Goals />} />
			</Route>
		  </Routes>
		</BrowserRouter>
	  </CookiesProvider>
  );
}

export default App;
