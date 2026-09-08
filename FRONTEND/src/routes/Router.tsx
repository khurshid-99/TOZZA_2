import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "../features/home/pages/Home";
import Product from "../features/product/pages/Product";
import ProductDetils from "../features/productDetils/pages/ProductDetils";
import Layout from "../app/Layout";
import About from "../features/about/pages/About";
import Contact from "../features/contact/pages/Contact";
import Login from "../features/auth/pages/Login";
import SignUp from "../features/auth/pages/SignUp";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product",
        element: <Product />,
      },
      {
        path: "/product/detils",
        element: <ProductDetils />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
