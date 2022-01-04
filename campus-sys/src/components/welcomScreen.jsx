import React from "react";
import "./welcome.css";

import { Link } from "react-router-dom";
const Welcome = () => {
  return (
    <div>
      <h1 className="header">Welcome to Campus Recruitment System</h1>
      <div className="container">
        <h3>Please select one, in order to SignUp/SignIn.</h3>
        <Link to={"/student-login"}>
          <h1>Student</h1>
        </Link>
        <Link to={"/company-login"}>
          <h1>Company</h1>
        </Link>
        <Link to={"/admin"}>
          <h1>Admin</h1>
        </Link>
      </div>
      <footer></footer>
    </div>
  );
};

export default Welcome;
