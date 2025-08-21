import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {BrowserRouter,Routes,Route} from 'react-router'
import ListArticle from '../Pages/Blog/ListArticle.jsx'
import ListSingleArticle from '../Pages/Blog/ListSingleArticle.jsx'
import CreateArticle from '../Pages/Blog/CreateArticle.jsx'
import UpdatedArticle from '../Pages/Blog/UpdatedArticle.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={  <App />} />
    <Route path='/admin/blog/articles' element={  <ListArticle/>} />
    <Route path='/admin/blog/articles/:articleId' element={  <ListSingleArticle/>} />
    <Route path='/admin/blog/articles/:articleId/edit' element={  <UpdatedArticle/>} />

    <Route path='/admin/blog/articles/create' element={  <CreateArticle/>} />



  </Routes>
  </BrowserRouter>
  </StrictMode>,
)
