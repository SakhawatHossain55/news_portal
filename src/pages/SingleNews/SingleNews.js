import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const SingleNews = () => {
  const { _id } = useParams();
  const [singleEvent, setSingleEvent] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/singleNews/${_id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSingleEvent(data[0]);
      });
  }, []);

  const { textarea, name } = singleEvent;
  return (
    <div className="singleNews rounded container shadow-lg p-3 my-5 bg-body rounded p-4">
      <img src={`data:image/jpeg;base64,${singleEvent?.image?.img}`} />
      <h3>{name}</h3>
      <p>{textarea}</p>
    </div>
  );
};

export default SingleNews;

// import { Button } from "react-bootstrap";
// import React from "react";
// import { useState } from "react";
// import { useContext } from "react";
// import { useEffect } from "react";
// import { useParams } from "react-router";
// import { UserContext } from "../../App";
// import "./SingleEvent.css";
// import { Link } from "react-router-dom";

// const SingleEvent = () => {
//   const { _id } = useParams();
//   console.log(_id);
//   const [loggedInUser, setLoggedInUser] = useContext(UserContext);
//   const [singleEvent, setSingleEvent] = useState({});
//   useEffect(() => {
//     fetch(`https://shielded-caverns-15768.herokuapp.com/singleEvent/${_id}`)
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data[0]);
//         setSingleEvent(data[0]);
//       });
//   }, []);

//   const handleDonation = () => {
//     const newDonation = { ...loggedInUser, ...singleEvent };
//     fetch("https://shielded-caverns-15768.herokuapp.com/donation", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(newDonation),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//       });
//   };

//   return (

//   );
// };

// export default SingleEvent;
