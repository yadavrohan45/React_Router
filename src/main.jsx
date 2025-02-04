import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '../components/home.jsx'
import About from '../components/About.jsx'
import Layout from './layout.jsx'
import ContactUs from '../components/ContactUs.jsx'
import User from '../User/User.jsx';
import Github from '../components/Github.jsx';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[{
      path:"",
      element:<Home/>
    },
    {
      path:"about",
      element:<About/>
    },
    {
      path:"contact",
      element:<ContactUs/>
    },
    {
      path:"user/:userid",
      element:<User/>
    },
    {
      path:"github",
      element:<Github/>
    }
  ]
  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
