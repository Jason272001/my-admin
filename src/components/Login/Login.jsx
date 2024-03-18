import React, { useState } from "react";
import "tachyons";

const Login = ({ loadUser, onRouteChange }) => {
  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");

  const onEmailChange = (event) => {
    setSignInEmail(event.target.value);
  };

  const onPasswordChange = (event) => {
    setSignInPassword(event.target.value);
  };

  const onSubmitSignIn = () => {
    fetch("https://intense-dawn-79194-9e92add1c908.herokuapp.com/signin", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: signInEmail,
        password: signInPassword,
      }),
    })
      .then((response) => response.json())
      .then((user) => {
        console.log("User data received from server:", user); // Log the user data received from the server
        if (user.id) {
          console.log("User signed in successfully.");
          loadUser(user);
          onRouteChange("home");
        } else {
          console.log("Error: Wrong user or credentials received.");
          alert("Wrong user or credentials"); // Show an alert for wrong user or credentials
        }
      })
      .catch((error) => {
        console.log("Error occurred during sign in:", error); // Log any errors that occur during the sign-in process
        alert("Error occurred during sign in. Please try again."); // Show an alert for any other errors
      });
  };

  return (
    <article
      className="br3 ba  b-10 mv4 w-90 w-40-m w-25-l mw7 center mt-4"
      style={{
        position: "relative",
        marginTop: "30vh",

        borderColor: "#ffa600",
        boxShadow: "0px 0px 8px 2px rgba( 255, 166, 0, 0.7 )",
      }}
    >
      <main className="pa4 gray-80 flex justify-center">
        <div className="measure ">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0 center">
            <legend className="f1 fw6 ph0 mh0 center">Sign In</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">
                Email
              </label>
              <input
                onChange={onEmailChange}
                className="pa2 input-reset ba bg-transparent  w-150"
                type="email"
                name="email-address"
                id="email-address"
                style={{
                  color: "white",
                  boxShadow: "0px 0px 8px 2px rgba( 7, 76, 250, 0.2 )",
                  borderColor: "#ffa600",
                }}
              />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">
                Password
              </label>
              <input
                onChange={onPasswordChange}
                className="b pa2 input-reset ba bg-transparent  w-150"
                type="password"
                name="password"
                id="password"
                style={{
                  color: "white",
                  boxShadow: "0px 0px 8px 2px rgba( 7, 76, 250, 0.2 )",
                  borderColor: "#ffa600",
                }}
              />
            </div>
          </fieldset>
          <div className="">
            <input
              className="b ph3 pv2 input-reset ba b--gray bg-transparent grow pointer f6 dib w-100 br3 "
              onClick={onSubmitSignIn}
              style={{
                background: "#ffa500",
              }}
              type="submit"
              value="Sign in"
            />
          </div>
        </div>
      </main>
    </article>
  );
};

export default Login;
