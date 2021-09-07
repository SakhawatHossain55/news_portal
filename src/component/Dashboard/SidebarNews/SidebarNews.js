import React from "react";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Sidebar from "../Sidebar/Sidebar";

const SidebarNews = () => {
  const [service, setService] = useState({});
  const [file, setFile] = useState(null);
  const handleBlur = (e) => {
    const newService = { ...service };
    newService[e.target.name] = e.target.value;
    setService(newService);
  };
  const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", service.name);
    formData.append("author", service.author);
    formData.append("textarea", service.textarea);
    formData.append("category", service.category);

    fetch("https://cryptic-inlet-25917.herokuapp.com/sidebarNews", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        alert("Service added successfully.");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Row className="container-fluid">
      <Sidebar></Sidebar>
      <Col
        md={10}
        className="pt-4"
        style={{ position: "absolute", right: "0", background: "#F4FDFB" }}
      >
        <h3 className="text-brand p-4">Add News</h3>
        <form
          onSubmit={handleSubmit}
          style={{ background: "#fff" }}
          className="m-4 p-3"
        >
          <div className="form-group">
            <label for="exampleInputPassword1">Enter Title</label>
            <input
              onBlur={handleBlur}
              type="text"
              className="form-control"
              name="name"
              placeholder="Enter Title"
            />
          </div>
          <div className="form-group">
          <label for="exampleInputPassword1">Author</label>
              <input
                onChange={handleBlur}
                type="text"
                name="author"
                className="form-control"
                placeholder="Author"
              />
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1">Description</label>
            <textarea
              onBlur={handleBlur}
              name="textarea"
              className="form-control"
              cols="30"
              rows="3"
              placeholder="Enter Title"
            />
          </div>

          <Row className="form-group">
            <Col md={6}>
              <label for="exampleInputPassword1">Upload a Image</label>
              <input
                onChange={handleFileChange}
                type="file"
                className="form-control"
                placeholder="Image"
              />
            </Col>
            <Col md={6}>
              <label for="exampleInputPassword1">Category</label>
              <input
                onChange={handleBlur}
                name="category"
                className="form-control"
                placeholder="Category"
              />
            </Col>
          </Row>

          <button type="submit" className="btn-brand">
            Submit
          </button>
        </form>
      </Col>
    </Row>
  );
};

export default SidebarNews;
