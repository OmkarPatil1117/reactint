import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Card from './components/Card';
import { Nav } from './components/Nav';
import Buycards from './components/Buycards';
import Login from './components/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <BrowserRouter>
        <Nav></Nav>
              <Routes>
              <Route path='/' element={ <App></App> }> </Route>
              <Route path='/selling' element={ <Buycards></Buycards> }> </Route>
              <Route path='/login' element={ <Login></Login> }> </Route>
            </Routes>
        </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
