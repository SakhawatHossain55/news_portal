import React from "react";
import "firebase/auth";
import { Container } from "react-bootstrap";

const Login = () => {
  const handleBlur = (e) => {};

  const handleSubmit = (e) => {};

  return (
    <>
      <Container className="d-flex justify-content-center">
        <div style={{minWidth: '400px'}} className="rounded p-5 border my-5 ">
          <h3 className="py-4">Login With</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              className="form-control"
              onBlur={handleBlur}
              name="email"
              placeholder="Email"
              required
            />
            <br />
            <input
              type="password"
              className="form-control"
              onBlur={handleBlur}
              name="password"
              placeholder="Password"
              required
            />
            <br />
            <input className="btn-brand w-100 bold" type="submit" value="Sign In" />
          </form>
        </div>
      </Container>
    </>
  );
};

export default Login;
