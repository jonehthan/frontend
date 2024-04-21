import React from "react";
import LoginComponent from "../components/LoginComponent.jsx";

const Login = ({ setUser }) => {
  return (
    <div>
      <LoginComponent setUser={setUser} />
    </div>
  );
}

export default Login;
