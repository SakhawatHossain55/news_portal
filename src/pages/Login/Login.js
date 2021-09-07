import React from "react";
import Google from "../../images/google.png";
import { useHistory, useLocation } from "react-router";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import { UserContext } from "../../App";
import { useContext } from "react";
import "firebase/auth";
import { Container } from "react-bootstrap";

const Login = () => {
  const [ setLoggedInUser] = useContext(UserContext);

  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const handleGoogleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const { displayName, email, photoURL } = result.user;
        const signedInUser = {
          userName: displayName,
          email,
          photoURL,
          isLoggedIn: true,
        };
        setUserToken();
        setLoggedInUser(signedInUser);
        history.replace(from);
      })
      .catch((error) => {
        var errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  const setUserToken = () => {
    firebase
      .auth()
      .currentUser.getIdToken(/* forceRefresh */ true)
      .then(function (idToken) {
        sessionStorage.setItem("token", idToken);
      })
      .catch(function (error) {});
  };

  const handleBlur = (e) => {};

  const handleSubmit = (e) => {};
  return (
    <div>
      <Container className="">
        <div className="d-flex justify-content-center">
          <div
            style={{ minWidth: "400px" }}
            className="rounded  p-5 border my-5 "
          >
            <h3 className="py-4">Login With</h3>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                className="form-control"
                onBlur={handleBlur}
                name="email"
                placeholder="Email"
                required
              />
              <br />
              <input
                type="password"
                className="form-control"
                onBlur={handleBlur}
                name="password"
                placeholder="Password"
                required
              />
              <br />
              <input
                className="btn-brand w-100 bold"
                type="submit"
                value="Sign In"
              />
            </form>
          </div>
        </div>
        <div className="text-center centered mb-3 login">
          <button
            className="google-button centered rounded-pill"
            onClick={handleGoogleSignIn}
          >
            <img src={Google} alt="google" />
            Continue with Google
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Login;
