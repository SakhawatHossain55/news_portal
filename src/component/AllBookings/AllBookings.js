import React from 'react';
import { Col } from 'react-bootstrap';

const AllBookings = ({bookings}) => {
    const {image, textarea, name} = bookings;
    return (
        
            <Col md={6}>
                <div className="bookingList-style">
                    <div className="row">
                        <div className="col">
                        <img src={`data:image/jpeg;base64,${image.img}`} alt="" />
                        </div>
                        <div className="col">
                        
                        </div>
                    </div>
                        <h3>{name}</h3> 
                        <p>{textarea}</p>
                </div>
            </Col>

    );
};

export default AllBookings;



