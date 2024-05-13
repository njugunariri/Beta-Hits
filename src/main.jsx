import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/Sections/About/About.jsx";
import SavedSongs from "./components/Sections/SavedSongs/SavedSongs.jsx";
import Loginpage from "./components/Layouts/Login/Loginpage.jsx";
import Home from "./components/Sections/Home/Home.jsx";
import Profile from "./components/Layouts/Profile/Profile.jsx";
import SignUp from "./components/Layouts/Profile/SignUp.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Loginpage />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/app",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/savedSongs",
    element: <SavedSongs />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <Loginpage />
    </RouterProvider>
  </React.StrictMode>
);
