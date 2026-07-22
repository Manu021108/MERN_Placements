import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import './index.css'
import App from './App.jsx'

//To find the root element
//Render to app.jsx for reuasbility of pages/components
createRoot(document.getElementById('root')).render(
  //hidden bugs or deprecated code/ safe components 
  <BrowserRouter>
    <App />
  </BrowserRouter>)
