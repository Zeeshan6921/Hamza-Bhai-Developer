import React from "react";
import { Link } from "react-router-dom";
import "../header/header.css";
import logo from "../../logo.svg";

const header = () => {
  return (
    <div className="header">
      <div className="left">
        <img src={logo} height={"50px"} alt="" />
      </div>
      <div className="right">
        <ul>
          <li>Home</li>
          <li>Gaming</li>
          <li>About</li>
        </ul>
      </div>
      <div className="button">
        <Link to={"www.google.com"}>Log in</Link>
        <button>Go</button>
      </div>
    </div>
  );
};

export default header;
