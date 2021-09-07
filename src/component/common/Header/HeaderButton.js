import React from "react";
import { Button, Container, FormControl, InputGroup } from "react-bootstrap";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { BiSearch } from "react-icons/bi";

const HeaderButton = () => {
  return (
    <div className="header__button">
      <Container>
        <div className="d-flex align-items-center gap-3 py-3">
          <InputGroup>
            <FormControl
              className="border border-primary"
              placeholder="Search hear...."
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <Button variant="primary" id="button-addon2">
              <BiSearch className="text-white mx-3" />
            </Button>
          </InputGroup>
          <span className="header__button-icons d-flex mx-4 align-items-center">
            <FaFacebookF />
          </span>
          <span className="header__button-icons d-flex mr-4 align-items-center">
            <FaInstagram />
          </span>
          <span className="header__button-icons d-flex mr-4 align-items-center">
            <FaTwitter />
          </span>
          <span className="header__button-icons d-flex align-items-center">
            <FaLinkedinIn />
          </span>
        </div>
      </Container>
    </div>
  );
};

export default HeaderButton;
