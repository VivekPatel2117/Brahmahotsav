import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from "./pages/Home/Home";
import LayoutRoute from "./pages/Layoutroute/Layoutroute";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<LayoutRoute />}>
      <Route index element={<Home />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
