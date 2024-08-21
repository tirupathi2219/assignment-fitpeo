import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle"
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DashboardOverview from './components/DashboardOverview/DashboardOverview';
import Projects from './components/Projects';
import Skills from './components/Skills';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<App />} >
      <Route path='/' element={<DashboardOverview />} />
      <Route path='/my-projects' element={<Projects />} />
      <Route path='/skills' element={<Skills/>} />
    </Route>

    {/* <Route path='/my-projects' element={<Projects/>} /> */}
  </Routes>
  </BrowserRouter>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
