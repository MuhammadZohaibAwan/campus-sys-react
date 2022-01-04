import React from "react";
import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <div>
      <Link to={"/"}>
        <button>Back</button>
      </Link>
      <h1> Admin</h1>
    </div>
  );
};

export default Admin;
