import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Root from "../Root/Root";
import Allgroups from "../Pages/Allgroups";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ErrorPages from "../Pages/ErrorPages";
import Mygroups from "../Pages/Mygroups";
import Creategroup from "../Pages/Creategroup";

import Groupdetail from "../Pages/Groupdetail";
import Updategroup from "../Pages/Updategroup";





export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />, // Use element not Component
    errorElement: <ErrorPages />, // This will catch any error in this route branch
    children: [
      {
        index: true,
        // loader: () => fetch('/data.json'),
        element: <Home />,
        // hydrateFallbackElement : <Loading></Loading>
      },
      {
        path: "/Allgroups",
        // loader: () => fetch('/data.json'),
        element: <Allgroups></Allgroups>
        // hydrateFallbackElement : <Loading></Loading>
      },
      {
        path: "/Login",
        element: <Login />
      },
      {
        path: "/Register",
        element: <Register />
      },
      {
        path: "/myGroups",
         loader : () => fetch('http://localhost:4500/groups'),
        element: <Mygroups></Mygroups>
      },
      {
        path: "/createGroup",
        element: <Creategroup></Creategroup>
      },
      {
        path: "/Updategroups/:id",
          loader : ({params}) => fetch(`http://localhost:4500/groups/${params.id}`),
        element: <Updategroup></Updategroup>
      },
        {
        path: "/groupdetails/:id",
          loader : ({params}) => fetch(`http://localhost:4500/groups/${params.id}`),
        element: <Groupdetail></Groupdetail>
      },
      
    ]
    }
])