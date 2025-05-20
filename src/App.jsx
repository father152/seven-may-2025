import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Home from './Components/Header/Home/Home'
import About from './Components/Header/About/About'
import Contact from './Components/Header/Contact/Contact'
import Portfolio from './Components/Header/Portfolio/Portfolio'   
import House from "./Components/Golovna/Navigation/House"
import Floor from './Components/Golovna/Navigation/Floor'
import Flat from './Components/Golovna/Navigation/Flat'
import Buy from './Components/Header/Portfolio/Buy'
import Purchase from './Components/Header/Portfolio/Purchase'


export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Home />
        },
        {
          path: "about",
          element: <About />
        },
        {
          path: "portfolio",
          element: <Portfolio />
        },
        {
          path: "contact",
          element: <Contact />
        },
        {
          path: "house",
          element: <House />
        },
        {
          path: "floor",
          element: <Floor />
        },
        {
          path: "flat",
          element: <Flat />
        },
        {
          path: "buy",
          element: <Buy />
        },
{
          path: "purchase",
          element: <Purchase />
        },
      ]
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

