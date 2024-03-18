import React, { useState } from "react";
import "./Project.css";
import Table from "./table";
const Project = () => {
  const [link, setLink] = useState("");
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);

  const onLinkChange = (event) => {
    setLink(event.target.value);
  };

  const onDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const onPNameChange = (event) => {
    setName(event.target.value);
  };

  const onImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  const onSubmitSignUp = () => {
    const formData = new FormData();

    formData.append("name", name);
    formData.append("link", link);
    formData.append("description", description);
    formData.append("image", image);

    fetch("https://intense-dawn-79194-9e92add1c908.herokuapp.com/project", {
      method: "post",
      body: formData,
    })
      .then((response) => response)
      .then((project) => {
        console.log("Server Response:", project);

        alert("Successfully Registered");

        setLink("");
        setDescription("");
        setName("");
        setImage(null);
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div>
      <article
        key="project-form"
        className="br3 ba  b-10 mv4 w-90 w-40-m w-25-l mw7 center mt-1"
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
              <legend className="f1 fw6 ph0 mh0 center">Project</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="name">
                  Name
                </label>
                <input
                  onChange={onPNameChange}
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
                <label className="db fw6 lh-copy f6" htmlFor="email-address">
                  Link
                </label>
                <input
                  onChange={onLinkChange}
                  className="pa2 input-reset ba bg-transparent  w-150"
                  type="text"
                  name="link-address"
                  required
                  id="link-address"
                  style={{
                    color: "white",
                    boxShadow: "0px 0px 8px 2px rgba( 7, 76, 250, 0.2 )",
                    borderColor: "#ffa600",
                  }}
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">
                  Description
                </label>
                <textarea
                  onChange={onDescriptionChange}
                  className="b pa2 input-reset ba bg-transparent  w-150"
                  type="description"
                  name="description"
                  required
                  id="description"
                  style={{
                    color: "white",
                    boxShadow: "0px 0px 8px 2px rgba( 7, 76, 250, 0.2 )",
                    borderColor: "#ffa600",
                  }}
                ></textarea>
              </div>

              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">
                  Image
                </label>
                <input
                  onChange={onImageChange}
                  className="pa2 input-reset ba bg-transparent  w-150"
                  type="file"
                  name="image"
                  required
                  id="image"
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
                onClick={onSubmitSignUp}
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

      <Table />
    </div>
  );
};

export default Project;
