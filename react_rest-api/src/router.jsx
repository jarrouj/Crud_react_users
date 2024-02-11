import { Navigate, createBrowserRouter } from "react-router-dom";
import Login from "./views/Login";
import Users from "./views/Users";
import Signup from "./views/signup";
import NotFound from "./views/NotFound.jsx";
import DefaultLayout from "./components/DefaultLayout.jsx";
import GuestLayout from "./components/GuestLayout.jsx";
import Dashboard from "./views/Dashboard.jsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path:'/',
        element : <Navigate to="/users" />
      },
      {
        path: '/users',
        element: <Users />
      },
      {
        path: '/dashboard',
        element: <Dashboard />
      },
    ]
  },
  {
    path: '/',
    element: <GuestLayout />,
    children: [
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/signup',
        element: <Signup />
      },
    ]
  },


  {
    path: '*',
    element: <NotFound />
  },
])


export default router;
