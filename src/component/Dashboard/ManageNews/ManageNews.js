import React, { useEffect, useState } from 'react';
import { Col, Row, Spinner } from 'react-bootstrap';
import Sidebar from '../Sidebar/Sidebar';
import Manage from '../Manage/Manage';

const ManageNews = () => {
    const [manageNews, setManageNews] = useState([])
    useEffect(() => {
        fetch(`https://boiling-plateau-88262.herokuapp.com/news`)
        .then(res => res.json())
        .then(data => {
            setManageNews(data)
        })
    },[])
    return (
        <div className="container-fluid row">
            <Sidebar />
            <Col md={10} style={{ right: "0", background: "#F4FDFB" }} >
            <h3 className="text-brand p-4">Manage News</h3>
                <Row>
                    {
                        manageNews.length === 0 ?
                        <div className="text-center w-100">
                             <Spinner animation="grow" />
                         </div>
                        :
                         manageNews.map(news => <Manage news={news} key={news._id}></Manage>)
                    }
                </Row>
            </Col>
        </div>
    );
};

export default ManageNews;