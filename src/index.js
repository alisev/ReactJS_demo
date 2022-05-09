import React from 'react';
import ReactDOM from 'react-dom/client';

import Description from './components/Description';
import Table from './components/Table';
import AboutNavigation from './components/AboutNavigation';
import Options from './components/Options';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="description" element={<Description />}></Route>
          <Route path="aboutnav" element={<AboutNavigation />}></Route>
          <Route path="table" element={<Table />}></Route>
          <Route path="options" element={<Options />}></Route>
        </Route>
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);

reportWebVitals();
