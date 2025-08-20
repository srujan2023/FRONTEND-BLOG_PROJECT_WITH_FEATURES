import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {BrowserRouter,Routes,Route} from 'react-router'
import ListArticle from '../Pages/Blog/ListArticle.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={  <App />} />
    <Route path='/admin/blog' element={  <ListArticle/>} />

  </Routes>
  </BrowserRouter>
  </StrictMode>,
)
