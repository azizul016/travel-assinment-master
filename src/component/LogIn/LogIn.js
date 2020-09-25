import React, { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router-dom";
import {
  initializeLoginFramework,
  handleGoogleSignIn,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  handleFbSignIn,
} from "./loginManager";
import "./Login.css";
import fbIcon from "../../Image/Icon/fb.png";
import googleIcon from "../../Image/Icon/google.png";

function LogIn() {
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSignedIn: false,
    name: "",
    email: "",
    password: "",
    photo: "",
    error: "",
    success: false,
  });

  initializeLoginFramework();

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const googleSignIn = () => {
    handleGoogleSignIn().then((res) => {
      handleResponse(res, true);
    });
  };

  const fbSignIn = () => {
    handleFbSignIn().then((res) => {
      handleResponse(res, true);
    });
  };

  const handleResponse = (res, redirect) => {
    setUser(res);
    setLoggedInUser(res);
    if (!res.error) {
      if (redirect) {
        history.replace(from);
      }
    }
  };

  //Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    if (newUser && user.email && user.password) {
      createUserWithEmailAndPassword(user.name, user.email, user.password)
        .then((res) => {
          console.log(res);
          handleResponse(res, true);
        })
        .catch((error) => {
          console.log(error);
          const newUserInfo = { ...user };
          newUserInfo.error = error.error;
          newUserInfo.success = false;
          setUser(newUserInfo);
        });
    }

    if (!newUser && user.email && user.password) {
      signInWithEmailAndPassword(user.email, user.password).then((res) => {
        handleResponse(res, true);
      });
    }
    // e.preventDefault();
  };

  //Handle Change
  const handleBlur = (e) => {
    let isFieldValid = true;
    if (e.target.name === "email") {
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if (e.target.name === "password") {
      const isPassWordValid = e.target.value.length > 6;
      const passwordHasNumber = /\d+/.test(e.target.value);
      isFieldValid = passwordHasNumber && isPassWordValid;
    }
    if (isFieldValid) {
      const newUserInfo = { ...user };
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  };

  console.log("user", user);

  return (
    <div className="pt-5 mt-5">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-md-9 col-md-8 col-lg-6">
            <div className="p-4  p-sm-5">
              <img src={user.photoURL} alt="" />
              <form className="loginForm" onSubmit={handleSubmit}>
                <div className="form-group">
                  {newUser && (
                    <input
                      onBlur={handleBlur}
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="First Name"
                      required
                    />
                  )}
                  {newUser && (
                    <input
                      onBlur={handleBlur}
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Last Name"
                      required
                    />
                  )}
                  <input
                    onBlur={handleBlur}
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Your Email"
                    required
                  />
                  <input
                    onBlur={handleBlur}
                    name="password"
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    required
                  />
                  <input
                    type="submit"
                    className="form-control bg-warning"
                    value="Login"
                  />
                </div>
              </form>

              <input
                type="checkbox"
                onChange={() => setNewUser(!newUser)}
                name="newUser"
              />
              <label html for="newUser" className="ml-2 text-white">
                {newUser ? " Already have Account" : " Please Login"}{" "}
              </label>
              <div onClick={fbSignIn} className="duel-style">
                <img style={{ width: "25px" }} src={fbIcon} alt="" />
                <button>Continue with Facebook</button>
              </div>
              <div onClick={googleSignIn} className="duel-style">
                <img style={{ width: "25px" }} src={googleIcon} alt="" />
                {<button>Continue with Google</button>}
              </div>
              <p style={{ color: "red", fontSize: "20px" }}>{user.error}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
