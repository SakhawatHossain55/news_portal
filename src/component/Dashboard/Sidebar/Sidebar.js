import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../images/logo.png";
import "./Sidebar.css";

import { UserContext } from "../../../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGripHorizontal,
  faSignOutAlt,
  faPlus,
  faUserPlus,
  faList,
} from "@fortawesome/free-solid-svg-icons";
import { Col } from "react-bootstrap";

const Sidebar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [isAdmin, setIsAdmin] = useState([]);

  useEffect(() => {
    fetch("https://cryptic-inlet-25917.herokuapp.com/isAdmin")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find(
          (element) => element.email === loggedInUser.email
        );
        // console.log(found);
        setIsAdmin(found);
      });
  }, []);

  console.log("isAdmin", isAdmin);
  const isVerifyAdmin =
    loggedInUser.isLoggedIn === true &&
    isAdmin !== undefined &&
    isAdmin.email === loggedInUser.email;
  // console.log(isVerifyAdmin);

  return (
    <Col md={2}
      className="sidebar d-flex flex-column justify-content-between py-5 px-4"
      style={{ height: "100vh" }}
    >
      <ul className="list-unstyled li-style">
        {/* {isVerifyAdmin ? ( */}
          <>
            <Link className="laundry" to="/">
              <img src={logo} alt="" />
            </Link>
            <li>
              <Link to="/addNews" className="text-white">
                <FontAwesomeIcon icon={faPlus} /> <span>Add News</span>
              </Link>
            </li>
            <li>
              <Link to="/topNews" className="text-white">
                <FontAwesomeIcon icon={faPlus} /> <span>Add Top Nws</span>
              </Link>
            </li>
            <li>
              <Link to="/sidebarNews" className="text-white">
                <FontAwesomeIcon icon={faPlus} /> <span>Add Sidebar Nws</span>
              </Link>
            </li>
            <li>
              <Link to="/makeAdmin" className="text-white">
                <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
              </Link>
            </li>
            <li>
              <Link to="/manageNews" className="text-white">
                <FontAwesomeIcon icon={faGripHorizontal} />
                <span>Manage News</span>
              </Link>
            </li>
          </>
        {/* ) : (
          <>
            <p>Page Not Found</p>
          </>
        )} */}
      </ul>
      <div>
        <Link to="/login" className="text-white">
          <FontAwesomeIcon
            icon={faSignOutAlt}
            onClick={() => setLoggedInUser({})}
          />
          <span>Logout</span>
        </Link>
      </div>
    </Col>
  );
};

export default Sidebar;
