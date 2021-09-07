/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Col } from 'react-bootstrap';
import { useHistory } from 'react-router';


const News = ({service}) => {
    const {_id, name, author} = service;
    const history = useHistory()
    const handleServiceClick = () => {
        history.push(`/singleNews/${_id}`)
    }
    return (
        <Col lg={6}  >
            <div className="p-3 mb-4 border news">
                <figure>
                <img src={`data:image/jpeg;base64,${service.image.img}`} />
                </figure>
                <h6 className="pt-2">{name}</h6>
                <p>Author: {author}</p>
                <button onClick={handleServiceClick} className="btn-brand my-2">Details</button>
            </div>
        </Col>
    );
};

export default News;