import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useHistory, useParams } from "react-router-dom";
import travel from "../../fakeData/travel";
import "./Booking.css";

const Booking = (props) => {
  const { bookingId } = useParams();
  const place = travel.find((place) => place.id === parseInt(bookingId));
  const history = useHistory();
  const [form, setForm] = useState("");
  const handleAdd = () => {
    form && history.push("/about/" + place.userId);
  };

  return (
    <Container>
      <div className="row">
        <div className="col-md-6 mt-5">
          <h1>{place.title}</h1>
          <p>{place.description}</p>
        </div>
        <div className="col-md-6">
          <form className="formBg">
            <Form.Label>Origin</Form.Label>
            <Form.Control required type="text" />
            <br />
            <Form.Label>Destination</Form.Label>
            <Form.Control required value={place.title} type="text" />
            <div className="row">
              <div className="col-md-6">
                <Form.Label>From</Form.Label>
                <Form.Control required type="date" />
              </div>
              <div className="col-md-6">
                <Form.Label>To</Form.Label>
                <Form.Control
                  value={form}
                  onChange={(e) => setForm(e.target.value)}
                  required
                  type="date"
                />
              </div>
            </div>
            <br />
            <button
              className="button btn btn-warning"
              onClick={handleAdd}
              type="submit"
            >
              Start Booking
            </button>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default Booking;
