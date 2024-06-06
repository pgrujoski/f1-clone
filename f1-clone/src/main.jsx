import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import Home from "./pages/Home";
import Drivers from "./routes/Drivers";
import Driver from "./routes/Driver";
import Meetings from "./routes/Meetings";
import CarData from "./routes/CarData";
import Subscribe from "./routes/Subscribe";
import SignIn from "./routes/SignIn";
import SignUp from "./routes/SignUp";
import NotFound from "./routes/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/drivers",
        element: <Drivers />,
      },
      {
        path: "/driver/:id",
        element: <Driver />,
      },
      {
        path: "/meetings",
        element: <Meetings />,
      },
      {
        path: "/car-data",
        element: <CarData />,
      },
      {
        path: "/subscribe",
        element: <Subscribe />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
