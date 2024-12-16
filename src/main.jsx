import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {  HelmetProvider } from 'react-helmet-async';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './LayOut/Main.jsx';
import Home from './Pages/Home/Home/Home.jsx';
import Menu from './Pages/Menu/Menu.jsx';
import Order from './Pages/Order/Order/Order.jsx';
import Login from './Pages/Login/Login.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path: '/home',
        element: <Home></Home>
      },
      {
        path:'/menu',
        element: <Menu></Menu>
      },
      {
        path:'/order/:category',
        element:<Order></Order>
      },
      {
        path:'/login',
        element:<Login></Login>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
    <RouterProvider router={router} />
    </HelmetProvider>
  </StrictMode>,
)
