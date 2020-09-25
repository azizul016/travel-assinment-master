import React from 'react';
import { Button, Container, Form, FormControl, InputGroup, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../Image/Group 1330.png';
import './Header.css'

const Header = () => {
    return (
        <div>
        <Navbar  className="nav" variant="dark">
        <Container style={{marginLeft: '150px'}}>
          <Navbar.Brand href="/home">
              <img style={{width: '100px'}} src={logo} alt=""/>
          </Navbar.Brand>
          <Form inline className="text-center">
            <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
            </InputGroup.Prepend>
          <FormControl
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
          </Form>
          <Nav className="ml-auto">
            <Link className="text-white" to="/home">Home</Link>
            <Link  className="text-white" to="/destination">Destination</Link>
            <Link  className="text-white" to="/blog">Blog</Link>
            <Link  className="text-white" to="/contact">Contact</Link>
            <Link to="/login" className="button btn btn-warning">Login</Link>
          </Nav>
          </Container>
        </Navbar>
        </div>
    );
};

export default Header;