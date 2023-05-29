import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';


function Navvbarr({settext , setrate}) {
  return (
    <div><Navbar bg="dark" expand="lg" variant='dark'>
    <Container fluid>
      <Navbar.Brand className='nav-h' href="#">Cinema</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link href="#action1" > <Link style={{textDecoration:"none",color:"white"}} to="/"> Movies</Link></Nav.Link>
          <Nav.Link href="#action1"  > <Link style={{textDecoration:"none",color:"white"}} to="/contactus">Contact</Link> </Nav.Link>
          <Nav.Link href="#action1" > <Link style={{textDecoration:"none",color:"white"}} to="/aboutus"> About</Link></Nav.Link>
            <NavDropdown.Divider />
            
        </Nav>
        <ReactStars
    count={5}
    size={24}
    activeColor="pink"
    onChange={(newRating)=>setrate(newRating)}
  />
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            onChange={(e)=>settext(e.target.value)}
          />
          <Button variant="dark" 
           
          
          >Search</Button>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar></div>
  )
}

export default Navvbarr