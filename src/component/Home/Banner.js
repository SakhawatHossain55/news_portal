import React from "react";
import { Carousel, Container } from "react-bootstrap";
import banner1 from "../../assets/images/banner1.png";
import banner2 from "../../assets/images/banner2.png";
import banner3 from "../../assets/images/banner3.png";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="banner">
      <Container>
          <div className="mt-4">
            <Carousel>
              <Carousel.Item interval={1000}>
                <img
                  className="d-block w-100"
                  src={banner1}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <div className="banner__slider-button">
                    <Link className="border-0 text-center btn-brand" to="#">
                      Details
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
                  <div className="banner__slider-button">
                    <Link className="border-0 text-center btn-brand" to="#">
                      Details
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
                  <div className="banner__slider-button">
                    <Link className="border-0 text-center btn-brand" to="#">
                      Details
                    </Link>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
      </Container>
    </div>
  );
};

export default Banner;
