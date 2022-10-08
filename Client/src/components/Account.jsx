import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Login from "./Login";
function Account() {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleinput = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };
  const [error, setError] = useState("");
  const Navigate = useNavigate();
  const register = (e) => {
    e.preventDefault();
    const { username, email, password } = data
    if( username && email && password){
        axios.post("http://localhost:7000/api/user/Register", data)
        .then( res => {
            alert("Details Saved")
            Navigate('/Login')
        })
    } else {
        alert("invalid input")
    }
    
}
  return (
    <div>
      <h1 className="text-center Login">Register Here</h1>
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
            type="email"
            placeholder="Email"
            value={data.email}
            name="email"
            onChange={handleinput}
          />
          <input
            type="password"
            placeholder="Password"
            value={data.password}
            name="password"
            onChange={handleinput}
          />
          {error && <div>Error</div>}
          <div className="button_align">
            <button className="Register" onClick={register}>
              Register
            </button>
          </div>
          <div className="login">
            Already have an account?
            <p>
              {" "}
              <Link to="/Login" style={{ textDecoration: "none" }}>
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Account;

