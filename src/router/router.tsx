import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Signin from "../pages/signin";
import Signup from "../pages/signup";
import NewsFeed from "../pages/news-feed";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/newsfeed",
    element: <NewsFeed />,
  },
]);
