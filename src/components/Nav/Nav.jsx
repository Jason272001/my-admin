import React from "react";

const Nav = ({ onRouteChange, name, email }) => {
  return (
    <div>
      <nav
        style={{
          display: "flex",
          justifyContent: "flex-end ",
          position: "relative",
        }}
      >
        <p
          onClick={() => onRouteChange("home")}
          className="f3 link dim black underline pa4 pointer"
          style={{ color: "#ffa600" }}
        >
          Project
        </p>
        <p
          onClick={() => onRouteChange("register")}
          className="f3 link dim black underline pa4 pointer"
          style={{ color: "#ffa600" }}
        >
          Register
        </p>

        <p
          onClick={() => onRouteChange("signin")}
          className="f3 link dim black underline pa4 pointer"
          style={{ color: "#ffa600" }}
        >
          Sign Out
        </p>
      </nav>

      <nav
        style={{
          position: "relative",
          marginLeft: "5vw",
        }}
      >
        <p>{name}</p>
        <p>{email}</p>
      </nav>
    </div>
  );
};

export default Nav;
