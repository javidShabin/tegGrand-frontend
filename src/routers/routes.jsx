import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import SignupPage from "../pages/signupPage";
import LoginPage from "../pages/loginPage";
import Products from "../pages/Products";
import ProductDetails from "../pages/ProductDetails";
import ProductCreatePage from "../pages/Product_creation";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/signup",
        element: <SignupPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/products/:id",
        element: <ProductDetails />,
      },
      {
        path: "/create_products",
        element: <ProductCreatePage />
      }
    ],
  },
]);
