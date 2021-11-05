import React, { useRef,useContext } from "react";
import "../css/login.css";
import { auth } from "../firebase";
import {ThemeContext} from "../Hooks/useContext"
function SignUp() {
  const theme = useContext(ThemeContext); //for SignIn background
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const register = (e) => {
    e.preventDefault();
    alert(emailRef.current.value);
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="signUpScreen">
      <form>
        <h1 style={{ background: theme.background, color: theme.foreground }}>Sign In</h1>
        <input ref={emailRef} type="email" placeholder="Email" />
        <input ref={passwordRef} type="password" placeholder="Password" />
        <button onClick={signIn}>Sign In</button>
        <h4 >
          New to Netflix <span onClick={register}>Sign Up Now.</span>
        </h4>
      </form>
    </div>
  );
}

export default SignUp;
