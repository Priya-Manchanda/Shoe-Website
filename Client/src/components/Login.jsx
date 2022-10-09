import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
function Login() {
  const [data, setData] = useState({
    username: "",
    Password: "",
  });
  const Navigate = useNavigate();
  const handleinput = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };
  const [error, setError] = useState("");
  const login = (e) => {
    e.preventDefault();
    const { username, password } = data;
    if (username && password) {
      axios.post("http://localhost:7000/api/user/login", data).then((res) => {
        alert("Logged In");
        Navigate("/");
      });
    } else {
      alert("invalid input");
    }
  };
  return (
    <div>
      <h1 className="text-center Login">Login Here</h1>
      <div className="account">
        <form className="form">
          <input
            type="text"
            placeholder="Username"
            value={data.username}
            name="username"
            onChange={handleinput}
          />
          <input
            type="password"
            placeholder="Password"
            value={data.Password}
            name="Password"
            onChange={handleinput}
          />
          {error && <div>{error}</div>}
          <div className="button_align">
            <button className="Register" type="submit" onClick={login}>
              Login
            </button>
          </div>
          <div className="login">
            Don't have an account?
            <p>
              <Link to="/account" style={{ textDecoration: "none" }}>
                Register
              </Link>{" "}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
