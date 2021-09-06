import React from 'react';
import { Carousel, Col, Container, ListGroup, Row } from 'react-bootstrap';
import banner1 from '../../assets/images/banner1.png';
import banner2 from '../../assets/images/banner2.png';
import banner3 from '../../assets/images/banner3.png';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className="banner">
      <Container>
        <Row>
          <Col lg={3}>
            <ListGroup>
              <ListGroup.Item disabled>Cras justo odio</ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>Morbi leo risus</ListGroup.Item>
              <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
              <ListGroup.Item disabled>Cras justo odio</ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>Morbi leo risus</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col lg={9} className="mt-4">
            <Carousel>
              <Carousel.Item interval={1000}>
                <img
                  className="d-block w-100"
                  src={banner1}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <b>Big Sale Offer</b>
                  <h1>High-Quality Product Camera</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <div className="banner__slider-button">
                    <Link className="border-0 text-center btn-brand" to="#">
                      <FaShoppingCart /> Shop Now
                    </Link>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={500}>
                <img
                  className="d-block w-100"
                  src={banner2}
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <b>Big Sale Offer</b>
                  <h1>High-Quality Product Camera</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <div className="banner__slider-button">
                    <Link className="border-0 text-center btn-brand" to="#">
                      <FaShoppingCart /> Shop Now
                    </Link>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={banner3}
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <b>Big Sale Offer</b>
                  <h1>High-Quality Product Camera</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <div className="banner__slider-button">
                    <Link className="border-0 text-center btn-brand" to="#">
                      <FaShoppingCart /> Shop Now
                    </Link>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
