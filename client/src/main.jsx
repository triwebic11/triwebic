import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/ui/About.jsx";
import Services from "./components/ui/Services.jsx";
import Contact from "./components/ui/Contact.jsx";
import Projects from "./components/ui/Projects.jsx";
import Header from "./components/Header.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/about", element: <About /> },
  { path: "/services", element: <Services /> },
  { path: "/contact", element: <Contact /> },
  { path: "/products", element: <Projects /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
