import React from 'react';
import { Container } from 'react-bootstrap';
import star from '../../Image/Icon/star_1_.png';
import './About.css'

const About = (props) => {
    const {name, cost, rattingNumber, description, comfort, bed, bedrooms, bathrooms, image, guests, ratting} = props.room
    return (
        <Container>
         <div className="row mb-4">
             <div className="col-md-5">
                <img style={{width: '200px', height: '200px', borderRadius: '10px'}} src={image} alt=""/>
             </div>
             <div className="col-md-7">
                <h5>{name}</h5>
                <p>{guests} guests {bed} beds {bedrooms} bedrooms {bathrooms} baths</p>
                <p><small>{description}</small></p>
                <p><small>{comfort}</small></p>
                <div className="row">
                    <div className="col-md-6" style={{display: 'flex'}}>
                        <img style={{width: '18px', height: '18px'}} src={star} alt=""/>
                        <h6 className="ml-2">{ratting} (<span>{rattingNumber}</span>)</h6>
                    </div>
                    <div className="col-md-6">
                        <p>${cost} / <small>night</small></p>
                    </div>
                </div>
             </div>
         </div>
        </Container>
    );
};

export default About;