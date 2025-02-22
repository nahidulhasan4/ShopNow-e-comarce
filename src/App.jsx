import React from "react";
import Home from "./Home";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route index element={<Home />} />
  ),
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
