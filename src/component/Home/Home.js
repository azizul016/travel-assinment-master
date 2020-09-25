import React, { useContext, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { details } from '../../App';
import travel from '../../fakeData/travel';
import News from '../News/News';

const Home = () => {
//    const [data, setData] = useContext(details)
   const [data, setData] =  useState(travel)
    return (
        <Container>
            <div className="row mt-5">
                <div className="col-md-4 mt-5">
                    <h2>Cox's bazar</h2>
                    <h6>Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</h6>
                    <Button variant="warning">Booking</Button>
                </div>
                <div className="col-md-8">
                   <div className="row">
                    {
                        data.map(news => <News key={news.id} news={news}></News>)
                    }
                   </div>
                </div>
            </div>
        </Container>
    );
};

export default Home;