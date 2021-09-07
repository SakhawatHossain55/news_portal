import React, { useEffect, useState } from 'react';
import { Col, Spinner } from 'react-bootstrap';
import Sidebar from '../Sidebar/Sidebar';
import Manage from '../Manage/Manage';

const ManageServices = () => {
    const [manageService, setManageService] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/news`)
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            setManageService(data)
        })
    },[])
    return (
        <div className="container-fluid row">
            <Sidebar></Sidebar>
            <Col md={6} style={{ position: "absolute", right: "0", background: "#F4FDFB" }} >
            <h3 className="text-brand p-4">Manage Services</h3>
                <div className="row">
                    {
                        manageService.length === 0 ?
                        <div className="text-center w-100">
                             <Spinner animation="grow" />
                         </div>
                        :
                         manageService.map(service => <Manage service={service} key={service._id}></Manage>)
                    }
                </div>
            </Col>
        </div>
    );
};

export default ManageServices;