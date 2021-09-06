import React, { useEffect, useState } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import News from '../common/News/News';


const AllNews = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/news')
        .then(res => res.json())
        .then(data =>{
            // console.log(data);
            setServices(data);
        })
    }, [])
    return (
        <section className="py-5">
            <Container>
                <h1 className="text-center">What We Do Best</h1>
                <h4 className="text-center text-brand p-5">Our Services</h4>
                <div className="row">
                    {
                        services.length === 0 ?
                         <div className="text-center w-100">
                             <Spinner animation="grow" />
                         </div>
                         :
                          services.map(service =><News service={service} key={service._id}></News>)
                    }
                </div>
            </Container>
        </section>
    );
};

export default AllNews;