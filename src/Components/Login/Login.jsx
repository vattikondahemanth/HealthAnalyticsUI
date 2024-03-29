import React from "react";
import "./login.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Test from "../Test";

const Login = () => {
  let navigate = useNavigate();
  let [input, setInput] = useState({ name: "", email: "", password: "" });
  // let [send, setSend] = useState();

  let handleInput = function (e) {
    let { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  let validation = function () {
    let result = true;
    if (input.email === "" || input.email === null) {
      result = false;
      toast.warning("Please Enater Email");
    }
    return result;
  };

  let handleSubmit = async function (e) {
    e.preventDefault();
    if (validation()) {
      let response = await axios.get("http://127.0.0.1:8000/list_users");

      let data = await response.data.data;
      let user = data.find((user) => user.Email === input.email);
      console.log(user);
      if (user === undefined) {
        toast.warn("please provide email");
      }
      if ((user.password === undefined) | (input.password === undefined)) {
        toast.warn("please provide password");
      }
      if (user.Password === input.password) {
        console.log(user);
        navigate("/fetch", { state: { user: user.User_ID } });
      } else {
        toast.warn("please provide valid  password or email");
      }
    }
  };

  return (
    <React.Fragment>
      <div className="bg-img">
        <div className="logo-img"></div>
        <div className="login-box"></div>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition="Bounce"
        />

        <form className="main-login" onSubmit={handleSubmit}>
          <div>
            <h1>Login</h1>
          </div>

          <div>
            <input
              id="inputs"
              type="email"
              placeholder="Email ID"
              onChange={handleInput}
              value={input.email}
              name="email"
            ></input>
          </div>
          <div>
            <input
              value={input.password}
              id="inputs"
              type="text"
              placeholder="Password"
              onChange={handleInput}
              name="password"
            ></input>
          </div>
          <div>
            <input id="login-btn" type="submit" value="Login"></input>
          </div>
          <div>
            <p>Forgot password?</p>
          </div>
          <div>
            <input id="checkbox" type="checkbox" value="Login"></input>
            <label htmlFor="checkbox">Remember me</label>
          </div>
          <div>
            <label htmlFor="checkbox">New to site:</label>
            <input id="checkbox" type="button" value="Sign Up Now"></input>
          </div>
          <h1>florence@alphagenesislabs.com</h1>
          <h1>AglPassword</h1>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Login;
