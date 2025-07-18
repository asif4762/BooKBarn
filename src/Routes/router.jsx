import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import AllBooks from "../pages/AllBooks/AllBooks";
import AboutUs from "../pages/AboutUs/AboutUs";
import Contact from "../pages/Contact/Contact";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoutes";
import Test from "../pages/Test/Test";
import AddBooks from "../pages/AddBooks/AddBooks";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import DashboardLayout from "../DashboardLayout/DashboardLayout";
import MyCart from "../DashboardLayout/MyCart";
import MyBilling from "../DashboardLayout/MyBilling";
import Users from "../DashboardLayout/UsersDashboard";
import ContactUs from "../DashboardLayout/ContactUs";
import DeliveryStatus from "../DashboardLayout/DeliveryStatus";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "all-books",
        element: <AllBooks />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
      {
        path: "test",
        element: (
          <PrivateRoute>
            <Test />
          </PrivateRoute>
        ),
      },
      {
        path: "add-books",
        element: <AddBooks />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true, // Default route at /dashboard
        element: <MyCart />,
      },
      {
        path: "cart", // relative path /dashboard/cart
        element: <MyCart />,
      },
      {
        path: 'billings',
        element: <MyBilling/>
      },
      {
        path: 'users',
        element: <Users/>
      },
      {
        path:'messages',
        element:<ContactUs/>
      },
      {
        path:'delivery-status',
        element:<DeliveryStatus/>
      }
    ],
  },
]);
