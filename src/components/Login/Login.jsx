// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "tachyons";
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: "",
      signInPassword: "",
    };
  }

  onEmailChange = (event) => {
    this.setState({ signInEmail: event.target.value });
  };

  onPasswordChange = (event) => {
    this.setState({ signInPassword: event.target.value });
  };

  onSubmitSignIn = () => {
    fetch("http://localhost:3500/signin", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword,
      }),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user.ID) {
          this.props.loadUser(user);
          this.props.onRouteChange("home");
        } else {
          alert("wrong User");
        }
      });
  };

  render() {
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
                  onChange={this.onEmailChange}
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
                  onChange={this.onPasswordChange}
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
                onClick={this.onSubmitSignIn}
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
  }
}

export default Login;
