/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Col } from 'react-bootstrap';
import { useHistory } from 'react-router';


const News = ({service}) => {
    const {_id, name} = service;
    const history = useHistory()
    const handleServiceClick = () => {
        history.push(`/booking/${_id}`)
    }
    return (
        <Col lg={3} md={6} >
            <div className="p-3 mb-2 border news">
                <figure>
                <img src={`data:image/jpeg;base64,${service.image.img}`} />
                </figure>
                <h3 className="pt-2">{name}</h3>
                <button onClick={handleServiceClick} className="btn-brand my-2">Details</button>
            </div>
        </Col>
    );
};

export default News;