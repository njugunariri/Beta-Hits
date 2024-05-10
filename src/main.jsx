import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/Sections/About/About.jsx";
import Search from "./components/Sections/Search/Search.jsx";
import SavedSongs from "./components/Sections/SavedSongs/SavedSongs.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/search",
    element: <Search />,
  },
  {
    path: "/savedSongs",
    element: <SavedSongs />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
