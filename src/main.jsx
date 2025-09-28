import React, { Suspense, lazy } from 'react';
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx';
import Home from './components/Home.jsx';
import './index.css';

const UserDetails = lazy(() => import('./components/UserDetails.jsx'));
const BusDetails = lazy(() => import('./components/BusDetails.jsx'));
const Invoice = lazy(() => import('./components/Invoice.jsx'));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/bus",
        element: (
          <Suspense fallback={<div>Loading Bus Details...</div>}>
            <BusDetails />
          </Suspense>
        ),
      },
      {
        path: "/user-details",
        element: (
          <Suspense fallback={<div>Loading User Details...</div>}>
            <UserDetails />
          </Suspense>
        ),
      },
      {
        path: "/invoice",
        element: (
          <Suspense fallback={<div>Loading Invoice...</div>}>
            <Invoice />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
