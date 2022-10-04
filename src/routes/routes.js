import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import AboutUs from "../pages/about-us/AboutUs";
import Categories from "../pages/categories/Categories";
import Layout from "../components/layout";
import Login from "../pages/Login/Login";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "categories/:categoryID",
        element: <Categories />,
      },
    ],
  },
  {
    path:"login",
    element:<Login/>
  }
  // {
  //   path: "/",
  //   element: <Layout2 />,
  //   children: [
  //     {
  //       path: "login",
  //       element: <Login />,
  //     },
  //     {
  //       path: "register",
  //       element: <Register />,
  //     },
  //   ],
  // },
]);

export default router;
