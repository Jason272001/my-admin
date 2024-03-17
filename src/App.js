import React, { useState, useEffect } from "react";
import "./app.scss";
import Login from "./components/Login/Login";
import Nav from "./components/Nav/Nav";
import Register from "./components/Register/Register";
import Project from "./components/Project/Project";

const App = () => {
  const initialState = {
    route: "signin",
    IsSignIn: false,
    user: {
      id: "",
      name: "",
      email: "",
    },
  };

  const [state, setState] = useState(initialState);

  const loadUser = (data) => {
    setState((prevState) => ({
      ...prevState,
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
      },
    }));
  };

  const onRouteChange = (data) => {
    if (data === "signin") {
      window.localStorage.removeItem("IsSignIn");
    } else if (data === "home") {
      setState((prevState) => ({
        ...prevState,
        IsSignIn: true,
      }));
      window.localStorage.setItem("IsSignIn", true);
    }

    setState((prevState) => ({
      ...prevState,
      route: data,
    }));
  };

  useEffect(() => {
    const IsSignIn = window.localStorage.getItem("IsSignIn");
    if (IsSignIn) {
      setState((prevState) => ({
        ...prevState,
        IsSignIn: true,
      }));
    }
  }, []);

  let componentToRender;

  switch (state.route) {
    case "home":
      componentToRender = (
        <div>
          <Nav
            onRouteChange={onRouteChange}
            name={state.user.name}
            email={state.user.email}
          />
          <Project />
        </div>
      );
      break;
    case "register":
      componentToRender = (
        <div>
          <Nav
            onRouteChange={onRouteChange}
            name={state.user.name}
            email={state.user.email}
          />
          <Register loadUser={loadUser} onRouteChange={onRouteChange} />
        </div>
      );
      break;

    case "signin":
      componentToRender = (
        <Login loadUser={loadUser} onRouteChange={onRouteChange} />
      );
      break;
    // Add more cases as needed

    default:
      componentToRender = null; // Handle default case
  }

  return <div className="App">{componentToRender}</div>;
};

export default App;
