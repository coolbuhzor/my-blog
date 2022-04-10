import React from "react";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase-config";
import { NavWrapper, NavLink, Button } from "./NavCss";

const Nav = ({ isAuth, setIsAuth }) => {
  const navigate = useNavigate();
  const signOutfunc = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      navigate("/log-in");
    });
  };
  return (
    <NavWrapper>
      <div>
        <Link to="/">
          <NavLink>BUHZOR</NavLink>
        </Link>
      </div>

      <div>
        {!isAuth ? (
          <Link to="/Log-in">Log In</Link>
        ) : (
          <>
            <Link to="/create-post">Create Post</Link>

            <Button onClick={signOutfunc}> Sign out</Button>
          </>
        )}
      </div>
    </NavWrapper>
  );
};

export default Nav;
