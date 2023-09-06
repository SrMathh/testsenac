import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './components/app/App';
import reportWebVitals from './reportWebVitals';
import Navbar from './components/navbar/Navbar';
import Rodape from './components/rodape/Rodape'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Navbar 
    item1 = 'Oi'
    item2 = {55}
    />
    <Rodape
    int1 = 'primeiro'
    int2 = 'segundo'
    int3 = 'terceiro'
    int4 = 'quarto'
    int5 = 'quinto'
    />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
