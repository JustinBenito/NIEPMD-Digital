import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Login from './components/login.jsx'
import Home from './components/home.jsx'
import TopTabs from './components/tabs.jsx'
import Signature from './components/signature'
import NewInputPage from './components/finalpdf.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "add",
    element: <><TopTabs /></>,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/new-input",
    element: <NewInputPage />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);



