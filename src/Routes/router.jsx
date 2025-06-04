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
        path:'login',
        element:<Login></Login>
      },
      {
        path:'sign-up',
        element:<SignUp></SignUp>
      },
      {
        path:'/test',
        element:<PrivateRoute><Test></Test></PrivateRoute>
      },
      {
        path:'/add-books',
        element:<AddBooks></AddBooks>
      }
    ],
  },
]);
