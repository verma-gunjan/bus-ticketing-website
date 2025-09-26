import React from 'react';
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx';
import Home from './components/Home.jsx';
import BusDetails from './components/BusDetails.jsx'
// import userDetails from "./components/userDetails.jsx"
import UserDetails from "./components/UserDetails.jsx"
import './index.css';
import Invoice from './components/Invoice.jsx';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      {path: "/bus", element: <BusDetails/>},
      {path:"/user-details", element: <UserDetails/> },
      {path: "/invoice",  element: <Invoice/>}
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
