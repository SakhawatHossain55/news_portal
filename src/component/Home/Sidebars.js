import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import Sidebar from "../common/Sidebar";

const Sidebars = () => {
  const [sidebarNews, setSidebarNews] = useState([]);

  useEffect(() => {
    fetch("https://boiling-plateau-88262.herokuapp.com/sidebarNews")
      .then((res) => res.json())
      .then((data) => {
        setSidebarNews(data);
      });
  }, []);

  return (
    <div>
      {sidebarNews.length === 0 ? (
        <div className="text-center w-100">
          <Spinner animation="grow" />
        </div>
      ) : (
        sidebarNews.map((sidebarNews) => <Sidebar sidebarNews={sidebarNews} />)
      )}
    </div>
  );
};

export default Sidebars;
