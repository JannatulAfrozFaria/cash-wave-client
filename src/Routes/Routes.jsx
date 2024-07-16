import {
    createBrowserRouter,
  } from "react-router-dom";
import Dashboard from "../Layout/Dashboard";
import Register from "../Pages/Register/Register";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard></Dashboard> ,
      children: [
        {
            path: 'register',
            element: <Register></Register>
        }
      ]
    },
  ]);