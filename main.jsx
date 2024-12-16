
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AppState from './context /AppState.jsx'
import { BrowserRouter } from 'react-router-dom'
import Testing from './component/Testing.jsx'

createRoot(document.getElementById('root')).render(
  <AppState>
    <BrowserRouter>
    {/* <Testing /> */}
    <  App />
    </BrowserRouter>
    </AppState>
  
  
  // <BrowserRouter>
   
  // </BrowserRouter>,
)
