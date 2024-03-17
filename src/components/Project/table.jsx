import React, { useEffect, useState } from "react";
import "./Project.css";

const Table = () => {
  const [editID, setEditID] = useState(-1);
  const [editedProject, setEditedProject] = useState({
    ID: -1,
    project_name: "",
    link: "",
    description: "",
    img: null,
  });

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3500/display")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })

      .then((data) => setData(data))

      .catch((error) => console.log(error));
  }, []);
  const handleEdit = (id) => {
    fetch("http://localhost:3500/display/" + id)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json(); // Parse the response body as JSON
      })
      .then((data) => {
        // Assuming the response data contains the project object
        setEditedProject(data[0]);
      })
      .catch((error) => console.error(error));
    setEditID(id);
  };

  const handleDelete = (id) => {
    fetch("http://localhost:3500/delete/" + id, { method: "delete" })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // Assuming you want to update the data after deleting
        setData(data);
      })
      .catch((error) => {
        console.error("Error deleting project:", error);
      });
  };

  const handleUpdate = () => {
    const formData = new FormData();

    formData.append("name", editedProject.project_name);
    formData.append("link", editedProject.link);
    formData.append("description", editedProject.description);
    formData.append("image", editedProject.img);

    fetch("http://localhost:3500/update/" + editID, {
      method: "put",
      body: formData,
    })
      .then((response) => response, setEditID(-1))
      .then((project) => {
        console.log("Server Response:", project);
      })
      .catch((error) => console.error("Error:", error));
  };

  const handleLinkChange = (e) => {
    setEditedProject({
      ...editedProject,
      link: e.target.value,
    });
  };

  const handleDescriptionChange = (e) => {
    setEditedProject({
      ...editedProject,
      description: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    setEditedProject({
      ...editedProject,
      img: e.target.files[0],
    });
  };
  return (
    <div className="body">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>link</th>
            <th>desc</th>
            <th>Img</th>
            <th>Act</th>
          </tr>
        </thead>
        <tbody>
          {data.map((project, index) =>
            project.ID === editID ? (
              <tr>
                <td> {project.ID}</td>
                <td>
                  <input
                    type="text"
                    value={editedProject.project_name}
                    onChange={(e) =>
                      setEditedProject({
                        ...editedProject,
                        project_name: e.target.value,
                      })
                    }
                  />{" "}
                </td>
                <td>
                  <input
                    type="text"
                    value={editedProject.link}
                    onChange={handleLinkChange}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={editedProject.description}
                    onChange={handleDescriptionChange}
                  />
                </td>
                <td>
                  <input type="file" onChange={handleImageChange} />
                </td>
                <td>
                  <button onClick={handleUpdate}>Update</button>
                </td>
              </tr>
            ) : (
              <tr key={index}>
                <td>{project.ID}</td>
                <td>{project.project_name}</td>
                <td>
                  <a style={{ color: "lightgreen" }} href={project.link}>
                    {project.link}
                  </a>
                </td>
                <td>{project.description}</td>
                <td>
                  <img
                    style={{
                      width: "150px",
                      height: "150px",
                      margin: 0,
                    }}
                    src={`http://localhost:3500/project_image/` + project.img}
                    alt="img"
                  />
                </td>
                <td>
                  <button
                    style={{ margin: "4px" }}
                    onClick={() => handleEdit(project.ID)}
                  >
                    Edit
                  </button>

                  <button
                    style={{ margin: "4px" }}
                    onClick={() => handleDelete(project.ID)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
