import { NavLink } from "react-router-dom";
import NewsFeed from "./pages/news-feed";
import "./App.css";

function App() {
  return (
    <>
      <NewsFeed />
      <NavLink to="/signin">Sign In</NavLink>
    </>
  );
}

export default App;
