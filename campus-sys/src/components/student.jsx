import React from "react";
import { Link } from "react-router-dom";
import Login from "./login/loginForm";

const Student = () => {
  return (
    <div>
      <button>Back</button>
      <Link to={"/"}></Link>
      <Login />
    </div>
  );
};

export default Student;
