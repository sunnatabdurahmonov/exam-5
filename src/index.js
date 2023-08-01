import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,} from 'react-router-dom';
import { SectionContextProvider } from './context/Contex';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <SectionContextProvider>
  <BrowserRouter>
  <App/>
  </BrowserRouter>
   </SectionContextProvider>
  </React.StrictMode>
);
reportWebVitals();
