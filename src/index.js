import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Link, RouterProvider, createBrowserRouter } from "react-router-dom";
import CatFact from "./CatFact";
import Meme from "./Meme";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: (
      <div>
        About
        <Link to="/">Home</Link>
      </div>
    ),
  },
  {
    path: "/cat",
    element: <CatFact />,
  },
  {
    path: "/meme",
    element: <Meme />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
