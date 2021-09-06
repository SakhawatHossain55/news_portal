import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className="mt-4 bg-primary py-4">
            <Container>
                <div className="text-center text-white">
                    <p>Copyright © {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </Container>
        </div>
    );
};

export default Footer;