import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router';
import './index.css';
import App, { LoginProvider } from './App';
import reportWebVitals from './reportWebVitals';
import Registrations from './Registrations';
import { LogIn } from './LogIn';

ReactDOM.render(
  <React.StrictMode>
    <LoginProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}/>
          <Route path='login' element={<LogIn />}/>
          <Route path='/:eventId' element={<Registrations />}/>
        </Routes>
      </BrowserRouter>
    </LoginProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
