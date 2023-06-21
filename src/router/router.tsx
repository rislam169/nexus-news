import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Signin from "../pages/signin";
import Signup from "../pages/signup";
import NewsFeed from "../pages/news-feed";
import Profile from "../pages/profile";
import AuthenticatedLayouts from "../components/layouts/authenticated-layouts";
import UnAuthenticatedLayouts from "../components/layouts/unauthenticated-layouts";
import NotFound from "../pages/not-found";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/articles/:category",
        element: <App />,
      },
    ],
  },
  {
    path: "/newsfeed",
    element: <NewsFeed />,
  },
  {
    path: "/",
    element: <AuthenticatedLayouts />,
    children: [
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/",
    element: <UnAuthenticatedLayouts />,
    children: [
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/signin",
        element: <Signin />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
