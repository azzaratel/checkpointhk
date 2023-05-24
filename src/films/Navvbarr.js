import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ReactStars from "react-rating-stars-component";


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
          <Nav.Link href="#action1" className='nav-h'>Home</Nav.Link>
          <NavDropdown title="Tv shows" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3" className='nav-h'>Dramas</NavDropdown.Item>
            <NavDropdown.Item href="#action4" className='nav-h'> Horror </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5" className='nav-h'>Reality & Talk</NavDropdown.Item> </NavDropdown>
          <NavDropdown title="Movies" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3" className='nav-h'>Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4" className='nav-h'> Anime </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5" className='nav-h'>Crime</NavDropdown.Item> </NavDropdown>
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