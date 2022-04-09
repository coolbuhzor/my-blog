import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CreatePost from "./Pages/Create-posts/CreatePost";
import Home from "./Pages/Home";
import Login from "./Pages/LogIn/Login";
import Nav from "./components/Nav";
import { useState } from "react";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  console.log(isAuth);
  return (
    <Router>
      <Nav isAuth={isAuth} setIsAuth={setIsAuth} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/log-in" element={<Login setIsAuth={setIsAuth} />} />
      </Routes>
    </Router>
  );
}

export default App;
