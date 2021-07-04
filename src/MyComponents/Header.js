import React from 'react';
import {Link} from 'react-router-dom';
import { Navbar, Nav, Form, FormControl, Button, Figure } from 'react-bootstrap';

export default function Header() {

 let styleSolo={
   marginLeft:"10px",
   color:"white",
 }

    return (
    <>
      <Navbar bg="secondary" expand="lg" >
      <Navbar.Brand href="" className="styleSolo" style={styleSolo}>Solo Traveler</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        <Nav.Link href="/home" style={{color:'white'}}>Home</Nav.Link>
          <Nav.Link href="/services" style={{color:'white'}}>Services</Nav.Link>
          <Nav.Link href="/about" style={{color:'white'}}>About</Nav.Link>
          
        </Nav>
        
      </Navbar.Collapse>
    </Navbar>
  
      </>
    )
}
