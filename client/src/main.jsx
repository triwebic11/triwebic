import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/ui/About.jsx";
import Services from "./components/ui/Services.jsx";
import Contact from "./components/ui/Contact.jsx";
import Projects from "./components/ui/Projects.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import SpiderCursor from "./components/SpiderCursor.jsx";

const Layout = () => {
  return (
    <div>
      <SpiderCursor />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <App /> },
      { path: "/about", element: <About /> },
      { path: "/services", element: <Services /> },
      { path: "/contact", element: <Contact /> },
      { path: "/projects", element: <Projects /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
