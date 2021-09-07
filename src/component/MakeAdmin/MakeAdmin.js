import React, { useContext, useState } from "react";
import { Col } from "react-bootstrap";
import { UserContext } from "../../App";
import Sidebar from "../Dashboard/Sidebar/Sidebar";

const MakeAdmin = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [admin, setAdmin] = useState({})


    const handleBlur = (e) => {

        const newAdmin = {...admin}
        newAdmin[e.target.name] = e.target.value;
        setAdmin(newAdmin)

    }

    const handleSubmit = () => {
            const formData = new FormData()
            formData.append('email', admin.email);
            formData.append('password', admin.password);

            fetch('http://localhost:5000/admin', {
            method: "POST",
            body: formData, email: loggedInUser.email
            })
           
          .then((res) => res.json())
          .then((data) => {
              console.log(data);
            alert("added admin successfully");
          })
          .catch(error => {
            console.log(error)
          })
      };
  return (
    <div className="container-fluid row">
      <Sidebar></Sidebar>
      <Col md={10} className="pt-4" style={{ position: "absolute", right: "0", background: "#F4FDFB" }}>
        <Col md={8} className="offset-2">
            <h3 className="text-brand pt-5">Make Admin</h3>
            <from  onClick={handleSubmit}>


                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input onBlur={handleBlur} className="form-control mb-3" type="email" name="email" placeholder="test@test.com" />
                    <input onBlur={handleBlur} className="form-control" type="password" name="password" placeholder="password" />
                </div>
                
                <button type="submit" className="btn-brand">Submit</button>

            </from>
        </Col>
      </Col>
    </div>
  );
};

export default MakeAdmin;
