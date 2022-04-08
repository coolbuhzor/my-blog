// import logo from './logo.svg';
// import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CreatePost from "./Pages/CreatePost";
import Home from "./Pages/Home";
import Login from "./Pages/Login";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/"> Home </Link>
        <Link to="/create-post"> Create Post </Link>
        <Link to="/"> Log In </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/log-in" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
