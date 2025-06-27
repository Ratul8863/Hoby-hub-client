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
import Privetroute from "../Components/Privetroute";
import About from "../Pages/About/Contact/About";
import Contact from "../Pages/About/Contact/Contact";
import Support from "../Pages/About/Contact/Support";
import DashboardLayout from "../DashboardLayout/DashboardLayout";
import DashboardHome from "../DashboardLayout/DashPages/DashboardHome";
import DashboardAllItems from "../DashboardLayout/DashPages/DashboardAllItems";
import DashboardAddItem from "../DashboardLayout/DashPages/DashboardAddItem";
import DashboardMyItems from "../DashboardLayout/DashPages/DashboardMyItems";
import TermsOfUse from "../Pages/TermsOfUse";
import PrivacyPolicy from "../Pages/PrivacyPolicy";
import CookiePolicy from "../Pages/CookiePolicy";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPages />,
    children: [
      { index: true, element: <Home /> },
      { path: "/allgroups", element: <Allgroups /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      {
        path: "/mygroups",
        loader: () => fetch('https://hobyhub-server.vercel.app/groups'),
        element: (
          <Privetroute>
            <Mygroups />
          </Privetroute>
        )
      },
      {
        path: "/creategroup",
        element: (
          <Privetroute>
            <Creategroup />
          </Privetroute>
        )
      },
      { path: "terms", element: <TermsOfUse /> },
  { path: "privacy", element: <PrivacyPolicy /> },
  { path: "cookies", element: <CookiePolicy /> },
      {
        path: "/updategroups/:id",
        loader: ({ params }) =>
          fetch(`https://hobyhub-server.vercel.app/groups/${params.id}`),
        element: <Updategroup />
      },
      {
        path: "/groupdetails/:id",
        loader: ({ params }) =>
          fetch(`https://hobyhub-server.vercel.app/groups/${params.id}`),
        element: (
          <Privetroute>
            <Groupdetail />
          </Privetroute>
        )
      },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/support", element: <Support /> },

      // ✅ NESTED DASHBOARD INSIDE ROOT
      {
        path: "/dashboard",
        element: (
          <Privetroute>
            <DashboardLayout />
          </Privetroute>
        ),
        children: [
          { index: true, element: <DashboardHome /> },
          { path: "all-items", element: <DashboardAllItems /> },
          { path: "add-item", element: <DashboardAddItem /> },
          { path: "my-items", element: <DashboardMyItems /> },
        ]
      }
    ]
  }
]);
