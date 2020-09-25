import React from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import coxsbazar from '../../fakeData/Coxbazzer';
import About from '../About/About';

const BookingDetails = () => {
    
    const {id} = useParams();
    
    const hotel = coxsbazar.filter(ht => ht.place === id);
    return (
        <Container>
           <div className="row">
               <div className="col-md-7">
               {
                hotel.map(room => <About room={room}></About>)
               }
               </div>
               <div className="col-md-5">
                <iframe
                    width="100%"
                    height="670"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                    src={'https://maps.google.com/maps?q=bandarbone&t=&z=13&ie=UTF8&iwloc=&output=embed'}
                ></iframe>
                </div>
           </div>
        </Container>
    );
};

export default BookingDetails;