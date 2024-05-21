import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Cart from "../pages/Cart";
import Login from "../pages/Login";
import Register from "../pages/Register";
import LandingPage from "../pages/LandingPage";
import ProductDetail from "../features/products/ProductDetail";
import ProtectedLayout from "../Layout/ProtectedLayout";
import TransactionHistory from "../features/transaction/TransactionHistory";

const setupRouter = () =>
  createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <p>Not Found</p>,
      children: [
        {
          index: true,
          element: <LandingPage />,
        },
        {
          path: "product/:id",
          element: (
            <ProtectedLayout status="authentication">
              <ProductDetail />
            </ProtectedLayout>
          ),
        },
        {
          path: "carts",
          element: (
            <ProtectedLayout status="authentication">
              <Cart />
            </ProtectedLayout>
          ),
        },
        {
          path: "transaction-history",
          element: (
            <ProtectedLayout status="authentication">
              <TransactionHistory />
            </ProtectedLayout>
          ),
        },
      ],
    },
    {
      path: "/login",
      element: (
        <ProtectedLayout status="no-authentication">
          <Login />
        </ProtectedLayout>
      ),
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

export default setupRouter;
