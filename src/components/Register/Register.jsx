import React from "react";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      name: "",
    };
  }

  onEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  onPasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  onNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  onSubmitSignUp = () => {
    fetch("http://localhost:3500/register", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
      }),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user.id) {
          this.props.loadUser(user);
          alert("Successfuly Register");

          this.props.onRouteChange("home");
        }
      });
  };

  render() {
    return (
      <article
        className="br3 ba  b-10 mv4 w-90 w-40-m w-25-l mw7 center mt-4"
        style={{
          position: "relative",
          marginTop: "10vh",
          borderColor: "#ffa600",
          boxShadow: "0px 0px 8px 2px rgba( 255, 166, 0, 0.7 )",
        }}
      >
        <main className="pa4 gray-80 flex justify-center">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0 center">
              <legend className="f1 fw6 ph0 mh0 center">Register</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" for="name">
                  Name
                </label>
                <input
                  onChange={this.onNameChange}
                  className="pa2 input-reset ba bg-transparent  w-150"
                  type="text"
                  name="name"
                  id="name"
                  required
                  style={{
                    color: "white",
                    boxShadow: "0px 0px 8px 2px rgba( 7, 76, 250, 0.2 )",
                    borderColor: "#ffa600",
                  }}
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" for="email-address">
                  Email
                </label>
                <input
                  onChange={this.onEmailChange}
                  className="pa2 input-reset ba bg-transparent  w-150"
                  type="email"
                  name="email-address"
                  required
                  id="email-address"
                  style={{
                    color: "white",
                    boxShadow: "0px 0px 8px 2px rgba( 7, 76, 250, 0.2 )",
                    borderColor: "#ffa600",
                  }}
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" for="password">
                  Password
                </label>
                <input
                  onChange={this.onPasswordChange}
                  className="b pa2 input-reset ba bg-transparent  w-150"
                  type="password"
                  name="password"
                  required
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
                onClick={this.onSubmitSignUp}
                className="b ph3 pv2 input-reset ba b--gray bg-transparent grow pointer f6 dib w-100 br3 "
                style={{
                  background: "#ffa500",
                }}
                type="submit"
                value="Register"
              />
            </div>
            <div className="lh-copy mt3"></div>
          </div>
        </main>
      </article>
    );
  }
}

export default Register;
