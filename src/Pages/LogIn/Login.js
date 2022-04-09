import React from "react";
import { Helmet } from "react-helmet";
import { auth, googleAuthProvider } from "../../firebase-config";
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { FormDiv, LoginContainer } from "./LoginCss";
import { useNavigate } from "react-router-dom";
// import { GoogleIcon } from "./Icon";

const Login = ({ setIsAuth }) => {
  const navigate = useNavigate();
  const signInWithGoogle = () => {
    signInWithPopup(auth, googleAuthProvider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/");
    });
  };
  return (
    <LoginContainer>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Buhzor's Blog Log in Page</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <FormDiv>
        <img src="https://i.imgur.com/ZYzTdD0.png" alt="" />
        <h3>Welcome Back</h3>
        <input type="email" placeholder="Enter Your Email" />
        <input type="password" placeholder="Enter Your Password" />
        <button>Login </button>
        {/* <button onClick={signInWithGoogle}>Sign In With Google</button>
         */}
        <button type="button" onClick={signInWithGoogle}>
          Sign in with Google
        </button>
      </FormDiv>
    </LoginContainer>
  );
};

export default Login;
