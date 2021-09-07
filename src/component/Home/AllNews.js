import React, { useEffect, useState } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import News from "../common/News";
import Sidebars from "../Home/Sidebars";

const AllNews = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/news")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, []);
  return (
    <section className="py-5">
      <Container>
        <h1 className="text-center mb-4">What We Do Best</h1>
        <div className="row">
          {services.length === 0 ? (
            <div className="text-center w-100">
              <Spinner animation="grow" />
            </div>
          ) : (
            <Row>
              <Col md={8}>
                <Row>
                  {services.map((service) => (
                    <News service={service} key={service._id}></News>
                  ))}
                </Row>
              </Col>
              <Col md={4}>
                <Sidebars />
              </Col>
            </Row>
          )}
        </div>
      </Container>
    </section>
  );
};

export default AllNews;
