import { NavLink } from "react-router-dom";
import NewsFeed from "./pages/news-feed";
import "./App.css";
import { Button } from "@mui/material";
import { useAuthContext } from "./auth/auth-context";

function App() {
  const { logout } = useAuthContext();

  return (
    <>
      <NewsFeed />
      <NavLink to="/signin">Sign In</NavLink>
      <Button variant="text" onClick={logout}>
        Log out
      </Button>
    </>
  );
}

export default App;
