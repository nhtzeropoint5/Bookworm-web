import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router/dom";
import './index.css'
import App from './App.jsx'
import { router } from './Routes/Routes.jsx';
import BookProvider from './Context/BookContext.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <BookProvider>
   <RouterProvider router={router} />
  </BookProvider>

  </StrictMode>,
)
