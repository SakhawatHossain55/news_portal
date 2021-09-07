/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Col } from 'react-bootstrap';
import './Manage.css'

const Manage = ({news}) => {
    const {name, _id, image, price} = news;

    const deleteProduct = (id) => {
        fetch(`https://boiling-plateau-88262.herokuapp.com/delete/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((result) => {
            alert("deleted successfully");
          });
      };
      const loadProduct = (id) => {
        console.log("id", id);
        fetch(`https://boiling-plateau-88262.herokuapp.com/update/${id}`)
        .then((res) => res.json())
        .then(data =>{
          // const update = document.getElementById('update');

        })
      }

    return (
        <Col lg={3} md={6}>
            <div className="p-3 mb-3 manage-style">
            <img src={`data:image/jpeg;base64,${image.img}`} />
                <h6 className="pt-3">{name}</h6>
                <h3>${price}</h3>
                <button className="btn btn-danger mr-3" onClick={() => deleteProduct(_id)}>Delete</button> 
                <button className="btn btn-primary" onClick={() => loadProduct(_id)}> Edit</button>
            </div>
            <div style={{display: 'none'}} className="from-style">
              <from>
                <input name="name" placeholder="Name" type="text"/>
              </from>
            </div>
        </Col>
    );
};

export default Manage;