/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const SingleNews = () => {
  const { _id } = useParams();
  const [singleEvent, setSingleEvent] = useState({});
  useEffect(() => {
    fetch(`https://cryptic-inlet-25917.herokuapp.com/singleNews/${_id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSingleEvent(data[0]);
      });
  }, [_id]);

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